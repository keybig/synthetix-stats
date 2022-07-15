import { useMemo } from 'react'
import { useTable, useSortBy, useGroupBy, usePagination } from 'react-table'
import styles from './ModalFeeTable.module.css'
import { formatMoney } from '../../../../constants/format'
import Down from '../../../icon/Down'
import Up from '../../../icon/Up'
import UpDown from '../../../icon/upDown'


interface Props {

  totalFeeOvm: any[];
  totalFeeMain: any[];
  totalFeeAll: any[]
  click: number;
  tableId: number;
  dailyFeeMain: any[]
  dailyFeeOvm: any[]
  sevenFeeMain: any[]
  sevenFeeOvm: any[]
  thirtyFeeMain: any[]
  thirtyFeeOvm: any[]
  ninetyFeeMain: any[]
  ninetyFeeOvm: any[]
  allDailyFee: any[]
  allSevenFee: any[]
  allThirtyFee: any[]
  allNinetyFee: any[]

}


const TradeFeeTable = ({
  click,
  tableId,
  totalFeeAll,
  totalFeeMain,
  totalFeeOvm,
  dailyFeeMain,
  dailyFeeOvm,
  sevenFeeMain,
  sevenFeeOvm,
  thirtyFeeMain,
  thirtyFeeOvm,
  ninetyFeeMain,
  ninetyFeeOvm,
  allDailyFee,
  allSevenFee,
  allThirtyFee,
  allNinetyFee

}: Props) => {


  const ovmFeeData = tableId === 0 ? dailyFeeOvm : tableId === 1 ? sevenFeeOvm : tableId === 2 ? thirtyFeeOvm : tableId === 3 ? ninetyFeeOvm : totalFeeOvm
  const mainFeeData = tableId === 0 ? dailyFeeMain : tableId === 1 ? sevenFeeMain : tableId === 2 ? thirtyFeeMain : tableId === 3 ? ninetyFeeMain : totalFeeMain

  const allFeeData = tableId === 0 ? allDailyFee : tableId === 1 ? allSevenFee : tableId === 2 ? allThirtyFee : tableId === 3 ? allNinetyFee : totalFeeAll


  const feeTable = click === 1 ? mainFeeData : click === 10 ? ovmFeeData : allFeeData

  const data = useMemo(
    () => feeTable,
    [feeTable]
  )



  const columns = useMemo(
    () => [
      {
        Header: 'Protocol',
        accessor: 'name', // accessor is the "key" in the data
        Cell: ({ value }:any) => { return <span className={styles.feeCell}> {value}</span> }

      },
      {
        Header: 'Fee Amt',
        accessor: 'value',
        Cell: ({ value }:any) => { return <span className={styles.valueCell}> {formatMoney.format(value)}</span> }
      },
      {
        Header: 'Percent',
        accessor: 'percent',
        Cell: ({ value }:any) => { return <span className={styles.feeCell}> {value}</span> }

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
        pageSize: 4,

      },
    },
    useSortBy,
    usePagination
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance


 

  return (

    <><table {...getTableProps()} className={styles.mainTable}>
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
                    <span className={styles.sorted}>
                      {column.isSorted
                               ? <Down/>
                               : column.isSorted ?
                               <Up/> :
                               <UpDown/>}
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
          const stylerow = row.values.name
          return (
            <tr key={key} { ...restRowProps} className={
              stylerow === "1INCH" ?
              styles.oneInch :
              stylerow === "0" ?
              styles.ZERO :
              styles[stylerow]
            }>
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
    </>



  )
}

export default TradeFeeTable