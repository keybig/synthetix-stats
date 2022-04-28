import React, { useMemo } from 'react'
import { useTable, useSortBy } from 'react-table'
import styles from './TradeTable.module.css'
import Image from 'next/image'

type Props = {}

const TradeTable = (props: Props) => {

    const data = useMemo(
        () => [
          {
            col1: 'Lyra',
            col2: '867,543',
            col3: '3,000,000,000'
          },
          {
            col1: 'Thales',
            col2: '765,432',
            col3: '5,000,000'
          },
          {
            col1: 'Kwenta',
            col2: '654,321',
            col3: '8,000,000'
          },
        ],
        []
      )
    
      const columns = useMemo(
        () => [
          {
            Header: "Index",
            accessor: (_row: any, i : number) => i + 1,
            disableSortBy: true,
            disableFilters: true,
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
          },
          {
            Header: 'Volume',
            accessor: 'col3',
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
            ]
           
          }
        }, useSortBy)

      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = tableInstance


      
  return (
    
    <table {...getTableProps()} className={styles.mainTable}>
    <thead>
      {// Loop over the header rows
      headerGroups.map(headerGroup => (
        // Apply the header row props
        <tr {...headerGroup.getHeaderGroupProps()} className={styles.headRow}>
          {// Loop over the headers in each row
          headerGroup.headers.map(column => (
            // Apply the header cell props
            <th {...column.getHeaderProps(column.getSortByToggleProps())} className={styles.headKey}>
              {// Render the header
              column.render('Header')}
              <span>
                       {column.isSorted
                           ? column.isSortedDesc
                               ? '🔽'
                               : '🔼'
                           : ''}
                    </span>
            </th>
          ))}
        </tr>
      ))}
    </thead>
    {/* Apply the table body props */}
    <tbody {...getTableBodyProps()}>
      {// Loop over the table rows
      rows.map((row, i) => {
        // Prepare the row for display
        prepareRow(row)
        return (
          // Apply the row props
          <tr {...row.getRowProps()} className={styles.mainRow}>
            {// Loop over the rows cells
            row.cells.map(cell => {
              // Apply the cell props
              return (
                <td {...cell.getCellProps()} className={styles.mainKey}>
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
  );
}

export default TradeTable