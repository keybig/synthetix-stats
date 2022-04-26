import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import styles from './TradeTable.module.css'

type Props = {}

const TradeTable = (props: Props) => {

    const data = useMemo(
        () => [
          {
            col1: 'Lyra',
            col2: '867,543',
            col3: '1,000,000,000'
          },
          {
            col1: 'Thales',
            col2: '765,432',
            col3: '1,000,000'
          },
          {
            col1: 'Kwenta',
            col2: '654,321',
            col3: '1,000,000'
          },
        ],
        []
      )
    
      const columns = useMemo(
        () => [
          {
            Header: 'Protocol',
            accessor: 'col1', // accessor is the "key" in the data
          },
          {
            Header: 'N of Trades',
            accessor: 'col2',
          },
          {
            Header: 'Volume',
            accessor: 'col3',
          }
        ],
        []
      )
      // @ts-ignore
      const tableInstance = useTable({ columns, data })

      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = tableInstance


      
  return (
    
    <table {...getTableProps()} className={styles.table}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
   )
}

export default TradeTable