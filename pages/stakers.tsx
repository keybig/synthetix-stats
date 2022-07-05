import { getFeePeriods, getLatestRateById, getSNXHolders, getSynthetixById, getSynths } from "../subgraph-ovm";
import styles from '../styles/Dropdown.module.css'
import { ReactChild, ReactFragment, ReactPortal, Key, useMemo, useState } from "react";
import { useTable, useSortBy, useGroupBy, usePagination } from 'react-table'


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

            <p>{`ETH Stakers: ${numMain}`}</p>
            <p>{`OVM Stakers: ${numOvm}`}</p>
            <button onClick={()=> handleNetwork(1)}>ETH Mainnet</button>
            <button onClick={()=> handleNetwork(10)}>Optimism</button>

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
                             balanceOf_gt:1
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

        const totalStakeOvm = await snxStakerCall(optimism_url, issuersOvm)
        const totalStakeMain = await snxStakerCall(mainnet_url, issuersMain)

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