import { useMemo } from 'react'
import { useTable, useSortBy, useGroupBy, usePagination, useFlexLayout, useBlockLayout } from 'react-table'
import { formatMoney, formatNumber } from '../../../../constants/format';
import Modal from '../../../modal/Modal';
import styles from './ModalTradeTable.module.css'


interface ModalTable  {
  click: number;
  tableId: number;
  totalTradeStatsOvm: any[]
  dailyTradeStatsOvm: any[]
  thirtyTradeStatsOvm: any[]
  sevenTradeStatsOvm: any[]
  ninetyTradeStatsOvm: any[]
  dailyTradeStatsMain: any[]
  totalTradeStatsMain: any[]
  thirtyTradeStatsMain: any[]
  sevenTradeStatsMain: any[]
  ninetyTradeStatsMain: any[]
  currentTradeStatsAll: any[]
  totalTradeStatsAll: any[]
  dailyTradeStatsAll: any[]
  sevenTradeStatsAll: any[]
  thirtyTradeStatsAll: any[]
  ninetyTradeStatsAll: any[]
}




const ModalTradeTable = ({
  click, 
  tableId, 
  totalTradeStatsAll, 
  totalTradeStatsMain, 
  totalTradeStatsOvm, 
  currentTradeStatsAll, 
  dailyTradeStatsMain, 
  dailyTradeStatsOvm,
  sevenTradeStatsMain,
  sevenTradeStatsOvm,
  thirtyTradeStatsMain,
  thirtyTradeStatsOvm,
  ninetyTradeStatsMain,
  ninetyTradeStatsOvm,
  dailyTradeStatsAll,
  sevenTradeStatsAll,
  thirtyTradeStatsAll,
  ninetyTradeStatsAll
}:ModalTable) => {

 //const tradeTable = tableId === 1 ? currentTradeStats : totalTradeStats
 // const tradeDep = tableId === 1 ? currentVol : totalVol

 const ovmData = tableId === 0 ? dailyTradeStatsOvm : tableId === 1 ? sevenTradeStatsOvm : tableId === 2 ? thirtyTradeStatsOvm : tableId === 3 ? ninetyTradeStatsOvm : totalTradeStatsOvm
 const mainData = tableId === 0 ? dailyTradeStatsMain : tableId === 1 ? sevenTradeStatsMain : tableId === 2 ? thirtyTradeStatsMain : tableId === 3 ? ninetyTradeStatsMain : totalTradeStatsMain
 const allData = tableId === 0 ? dailyTradeStatsAll : tableId === 1 ? sevenTradeStatsAll : tableId === 2 ? thirtyTradeStatsAll : tableId === 3 ? ninetyTradeStatsAll : totalTradeStatsAll

   
 const tradeTable = click === 1 ? mainData : click === 10 ? ovmData : allData

 const data = useMemo(
      () => tradeTable,
      [tradeTable]
    )

    
      const columns = useMemo(
        () => [
         /*{
            Header: "Index",
            accessor: (_row: any, i : number) => i + 1,
          },*/
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
          }
        },  
        useSortBy,
        usePagination
        )

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

  </div>
    
)
    
    
      }
export default ModalTradeTable

