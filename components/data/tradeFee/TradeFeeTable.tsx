import { useMemo } from 'react'
import { useTable, useSortBy, usePagination } from 'react-table'
import styles from './TradeFeeTable.module.css'
import { formatMoney } from '../../../constants/format'
import Down from '../../icon/Down'
import Up from '../../icon/Up'
import UpDown from '../../icon/upDown'
import { MdFirstPage, MdChevronLeft, MdChevronRight, MdLastPage } from 'react-icons/md'


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
  allNinetyFee,
  

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
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    canNextPage,
    nextPage,
    canPreviousPage,
    previousPage,
    gotoPage,
    pageOptions,
    pageCount,
    prepareRow,
    state: {pageIndex}
  } = useTable(
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

        {page.map((row) => {
          prepareRow(row)
          const { key, ...restRowProps } = row.getRowProps()
          const stylerow = row.values.name
        
          return (
            <tr key={key} { ...restRowProps} className={
              stylerow === "1INCH" ?
              styles.oneInch :
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

      <div className={styles.tableNav}>
        
        <div>
        <button className={styles.chartButton} onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          <MdFirstPage/>
        </button>
        <button className={styles.chartButton} onClick={() => previousPage()} disabled={!canPreviousPage}>
          <MdChevronLeft/>
        </button>
        </div>

        <span className={styles.tableNavKey}>
            {pageIndex + 1} of {pageOptions.length}
        </span>

        <div>
        <button className={styles.chartButton} onClick={() => nextPage()} disabled={!canNextPage}>
          <MdChevronRight/>
        </button>
        <button className={styles.chartButton} onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          <MdLastPage/>
        </button>
        </div>
       
        
      </div>
    </>



  )
}

export default TradeFeeTable