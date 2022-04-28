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
    
    <table {...getTableProps()}>
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
    {/* Apply the table body props */}
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
  );
}

export default TradeTable