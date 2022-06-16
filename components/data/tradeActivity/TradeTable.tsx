import { useMemo } from 'react'
import { useTable, useSortBy, useGroupBy, usePagination } from 'react-table'
import { formatMoney, formatNumber } from '../../../constants/format';
import styles from './TradeTable.module.css'


interface table  {
  click: number;
  tableId: number;
  totalTradeStatsOvm: any[]
  currentTradeStatsOvm: any[]
  currentTradeStatsMain: any[]
  totalTradeStatsMain: any[]
  currentTradeStatsAll: any[]
  totalTradeStatsAll: any[]
}




const TradeTable = ({
  click, 
  tableId, 
  totalTradeStatsAll, 
  totalTradeStatsMain, 
  totalTradeStatsOvm, 
  currentTradeStatsAll, 
  currentTradeStatsMain, 
  currentTradeStatsOvm
}:table) => {

 //const tradeTable = tableId === 1 ? currentTradeStats : totalTradeStats
 // const tradeDep = tableId === 1 ? currentVol : totalVol

 const ovmData = tableId === 1 ? currentTradeStatsOvm : totalTradeStatsOvm
 const mainData = tableId === 1 ? currentTradeStatsMain : totalTradeStatsMain
 const allData = tableId === 1 ? currentTradeStatsAll : totalTradeStatsAll
   
 const tradeTable = click === 1 ? mainData : click === 10 ? ovmData : allData

 const data = useMemo(
      () => tradeTable,
      [tradeTable]
    )

    
      const columns = useMemo(
        () => [
          {
            Header: "Index",
            accessor: (_row: any, i : number) => i + 1
          },
          {
            Header: 'Protocol',
            accessor: 'col1', // accessor is the "key" in the data
            Cell: (cellProps:any) => {
              return (
                <span className={styles[cellProps.value]}>
                  {cellProps.value}
                </span>
              );
            },
          },
          {
            Header: 'N of Trades',
            accessor: 'col2',
            Cell: ({value}) => { return formatNumber.format(value)}
          },
          {
            Header: 'Volume',
            accessor: 'col3',
            Cell: ({value}) => { return formatMoney.format(value)}
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
                id: 'col3',
                desc: true,
              },
            ],  
            pageSize: 4
          }
        },  
        useSortBy,
        usePagination)

      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        canNextPage,
        nextPage,
        canPreviousPage,
        previousPage,
        prepareRow,
      } = tableInstance



      
  return (
    <div>
    <table {...getTableProps()} className={styles.mainTable}>
    <thead>
      {headerGroups.map((headerGroup) => {
        const { key, ...restHeaderGroupProps } = headerGroup.getHeaderGroupProps()
      return (
        <tr key={key} {...restHeaderGroupProps} className={styles.headRow}>
        {headerGroup.headers.map((column) => {
          const { key, ...restColumn } = column.getHeaderProps(column.getSortByToggleProps());
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
          );
        })}
      </tr>
      )})}
      
    </thead>
    <tbody {...getTableBodyProps()}>
     
    {page.map((row) => {
          prepareRow(row);
          const { key, ...restRowProps } = row.getRowProps();
          return (
            <tr key={key} {...restRowProps} className={styles.mainRow}>
              {row.cells.map((cell) => {
                const { key, ...restCellProps } = cell.getCellProps();
                return (
                  <td key={key} {...restCellProps} className={styles.mainKey}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
    </tbody>
  </table>
  {tradeTable.length > 4 ? 
      
    <><button className={styles.chartButton} onClick={() => previousPage()} disabled={!canPreviousPage}>
        {'<'}
      </button><button className={styles.chartButton} onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button></> : null}
  </div>
    
)
    
    
      }
export default TradeTable

