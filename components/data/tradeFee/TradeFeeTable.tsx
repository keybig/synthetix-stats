import React, { useMemo } from 'react'
import { useTable, useSortBy, useGroupBy, usePagination } from 'react-table'
import styles from './TradeFeeTable.module.css'
import Image from 'next/image'
import { keyframes } from 'styled-components'
import useGetTradeActivity from '../../../hooks/useGetTradeActivity'
import useGetTradeFee from '../../../hooks/useGetTradeFee'

type Props = {
  tableId?:number
}


const TradeFeeTable = (props: Props) => {

    const { tradeFeeArr } = useGetTradeFee()
    const { currentFeeData } = useGetTradeFee()
    const { currentFeeSum } = useGetTradeFee()
    const { totalFeeSum } = useGetTradeFee()


   



    const tableData = props.tableId === 1 ? currentFeeData : tradeFeeArr
    const feeDep = props.tableId === 1 ? currentFeeSum : totalFeeSum




    const data = useMemo(
        () => tableData,
        [feeDep]
      )

      
    
      const columns = useMemo(
        () => [
          {
            Header: 'Protocol',
            accessor: 'name', // accessor is the "key" in the data
            Cell: (cellProps:any) => {
              return (
                <span className={styles[cellProps.value]}>
                  {cellProps.value}
                </span>
              );
            },
          },
          {
            Header: 'Fee Amt',
            accessor: 'value',
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
            pageSize:4,
           
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
          <tbody {...getTableBodyProps()}>

              {page.map((row) => {
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

      {tableData.length > 4 ? 
      
      <><button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button><button onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </button></> : null}
      </>
    
    
  )
}

export default TradeFeeTable

/*
<table {...getTableProps()} className={styles.mainTable}>
     <thead>
       {// Loop over the header rows
       headerGroups.map(headerGroup => (
         // Apply the header row props
         <tr {...headerGroup.getHeaderGroupProps()}>
           {// Loop over the headers in each row
           headerGroup.headers.map(column => (
             // Apply the header cell props
             <th {...column.getHeaderProps()}>
               {// Render the header
               column.render('Header')}
             </th>
           ))}
         </tr>
       ))}
     </thead>
     {// Apply the table body props //}
     <tbody {...getTableBodyProps()}>
       {// Loop over the table rows
       rows.map(row => {
         // Prepare the row for display
         prepareRow(row)
         return (
           // Apply the row props
           <tr {...row.getRowProps()}>
             {// Loop over the rows cells
             row.cells.map(cell => {
               // Apply the cell props
               return (
                 <td {...cell.getCellProps()}>
                   {// Render the cell contents
                   cell.render('Cell')}
                 </td>
               )
             })}
           </tr>
         )
       })}
     </tbody>
   </table>
   */