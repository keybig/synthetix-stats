import { getFeePeriods, getLatestRateById, getSNXHolders, getSynthetixById, getSynths } from "../subgraph-ovm";
import styles from '../styles/Dropdown.module.css'
import { ReactChild, ReactFragment, ReactPortal, Key, useMemo, useState } from "react";
import { useTable, useSortBy, useGroupBy, usePagination } from 'react-table'
import Image from "next/image";


const Stakers = ({ mainStakers, ovmStakers }: any) => {

   

    const [network, setNetwork] = useState(1)

    const handleNetwork = (button:any) => {
        setNetwork(button.id);
      };

      const numMain = mainStakers.length
      const numOvm = ovmStakers.length

      const stakerData = network === 1 ? mainStakers : ovmStakers

    const data = useMemo(
        () => stakerData,
        [stakerData]
      )

    const columns = useMemo(
        () => [
          {
            Header: 'Address',
            accessor: 'address', // accessor is the "key" in the data
          },
          {
            Header: 'Staked Amount',
            accessor: 'stakedAmount',
          }
        ],
        []
      )
      // @ts-ignore
      const tableInstance = useTable(
        //@ts-ignore
        {
          //@ts-ignore
          columns,
          data,
          initialState: {
            sortBy: [
              {
                id: 'value',
                desc: true,
              },
            ],
    
          }
        },
        useSortBy,
      )
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = tableInstance

    return (
        <div className={styles.ddWrap}>

            <div className={styles.images}>
            <p> SNX Subgraph calling <strong>synthetix</strong> endpoint. This is what was used initially for the number of stakers.</p>
            <p> See the definitions in right of image. Issuers are number currently staking, snxholders are number currently holding</p>
            <p> Results in the middle of image, in the data object. The call used is the left of the image.</p>
            <Image src="/../public/synthetix.png" layout="responsive" width={150} height={75}/>
            </div>

            <div className={styles.images}>
            <p> SNX Subgraph calling <strong>totalActiveStakers</strong> endpoint. This is what was used in Grafana Dashboard for the number of stakers.</p>
            <p> See the definitions in right of image. count are number currently seen staking</p>
            <p> Results in the middle of image, in the data object. The call used is the left of the image.</p>
            <Image src="/../public/totalactive.png" layout="responsive" width={150} height={75}/>
            </div>

            <div className={styles.images}>
            <p> SNX Subgraph calling <strong>snxholder</strong> endpoint. This gives access to all snx holders.</p>
            <p> See the definitions in right of image. Collateral represents SNX that is locked as of the last event and cannot be spent. I was assuming collateral {`>`} 0 === currently staking.</p>
            <p> Also of note is initialDebtOwnership and debtEntryAtIndex. </p>
            <p> Results in the middle of image, in the data object. The call used is the left of the image.</p>
            <p> Below the image, is the full return of a call to <strong>snxholders</strong></p>
            <Image src="/../public/snxholder.png" layout="responsive" width={150} height={75}/>
            </div>

            <p>{`ETH Stakers: ${numMain}`}</p>
            <p>{`OVM Stakers: ${numOvm}`}</p>
            <button onClick={()=> handleNetwork(1)}>ETH Mainnet</button>
            <button onClick={()=> handleNetwork(10)}>Optimism</button>

            <p> The data below is the full return from a call to <strong>snxholders</strong> with parameters of <em>initialDebtOwnership not 0 and collateral of greater than or equal to 1. </em></p>
            <p> Use the buttons to switch between ETH and Optimism</p>
            <p> The number of stakers above is based on this return</p>
            <p> Cross referencing this data to the blockchain leads me to believe the call parameters need to be refined somehow</p>
            <p> Thanks in advance to all input</p>

<table {...getTableProps()} className={styles.mainTable}>
      <thead>
        {headerGroups.map((headerGroup) => {
          const { key, ...restHeaderGroupProps } = headerGroup.getHeaderGroupProps()
          return (
            <tr key={key} {...restHeaderGroupProps} className={styles.headRow}>
              {headerGroup.headers.map((column) => {
                const { key, ...restColumn } = column.getHeaderProps(column.getSortByToggleProps())
                return (
                  <th key={key} {...restColumn} className={styles.headKey}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? '🔽'
                          : '🔼'
                        : ''}
                    </span>
                  </th>
                )
              })}
            </tr>
          )
        })}

      </thead>
      <tbody {...getTableBodyProps()} className={styles.mainBody}>

        {rows.map((row) => {
          prepareRow(row)
          const { key, ...restRowProps } = row.getRowProps()
          return (
            <tr key={key} {...restRowProps} className={styles.mainRow}>
              {row.cells.map((cell) => {
                const { key, ...restCellProps } = cell.getCellProps()
                return (
                  <td key={key} {...restCellProps} className={styles.mainKey}>
                    {cell.render("Cell")}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
        </div>
    )
}

export default Stakers





export async function getStaticProps() {
        const mainnet_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/mainnet-main"
        const optimism_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/optimism-main"

        const snxRateCall = await getLatestRateById(
            optimism_url,
            { id: "SNX" },
            { rate: true }
        );

        const snxRate = snxRateCall.rate.toNumber()

        const fetchSnxInfo = async (network: string) => {
            const snxAll = await getSynthetixById(
                network,
                {
                    id: "1",
                },
                {
                    issuers: true,
                    snxHolders: true
                },
            )

            const issuers = snxAll.issuers.toNumber()
            const snxHolders = snxAll.issuers.toNumber()

            return {
                issuers,
                snxHolders
            }
        }

        const snxOvm = await fetchSnxInfo(optimism_url)
        const issuersOvm = snxOvm.issuers
        const holdersOvm = snxOvm.snxHolders

        const snxMain = await fetchSnxInfo(mainnet_url)
        const issuersMain = snxMain.issuers
        const holdersMain = snxMain.snxHolders



        const snxStakerCall = async (network: string, issuers: number) => {
            const snxStakerTotal = await getSNXHolders(
                network,
                {
                    orderBy: 'collateral',
                    orderDirection: 'desc',
                    first: issuers,
                    where: { initialDebtOwnership_not: 0,
                             collateral_gte:1
                     }

                }, {
                id: true,
                collateral: true,
            }
            );

            const totalStake = snxStakerTotal.reduce((sum: number, cur: any) => {
                return sum + cur.collateral.toNumber()
            }, 0)


            return snxStakerTotal

        }

        const totalStakeOvm = await snxStakerCall(optimism_url, holdersOvm)
        const totalStakeMain = await snxStakerCall(mainnet_url, holdersMain)

        const mainStakers = totalStakeMain.map(item => {
            const address = item.id
            const stakedAmount = item.collateral?.toNumber()
            return {
                address: address,
                stakedAmount: stakedAmount
            }
        })

        const ovmStakers = totalStakeOvm.map(item => {
            const address = item.id
            const stakedAmount = item.collateral?.toNumber()
            return {
                address: address,
                stakedAmount: stakedAmount
            }
        })
        

        return {
            props: {
                mainStakers,
                ovmStakers

            }
        }
    
}