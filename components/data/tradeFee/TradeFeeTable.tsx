import React, { useMemo } from 'react'
import { useTable, useSortBy, useGroupBy, usePagination } from 'react-table'
import styles from './TradeFeeTable.module.css'
import Image from 'next/image'
import { keyframes } from 'styled-components'
import { formatMoney } from '../../../constants/format'
import Down from '../../icon/Down'
import Up from '../../icon/Up'
import UpDown from '../../icon/upDown'


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
      },
      {
        Header: 'Fee Amt',
        accessor: 'value',
        Cell: ({ value }:any) => { return formatMoney.format(value) }
      },
      {
        Header: 'Percent',
        accessor: 'percent',
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
    page,
    canNextPage,
    nextPage,
    canPreviousPage,
    previousPage,
    prepareRow,
  } = tableInstance


  console.log(page)
  console.log(page)

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
          console.log(row)
          const color = row.values.name
          prepareRow(row)
          const { key, ...restRowProps } = row.getRowProps()
          const stylerow = row.values.name
          const styleKey = 
            row.values.name === "KWENTA" ?
            "green" :
            "purple"
          console.log(stylerow)
          console.log(row.values.name)
          return (
            <tr key={key} { ...restRowProps} className={
              stylerow === "1INCH" ?
              styles.oneInch :
              stylerow === "0" ?
              styles.ZERO :
              styles[stylerow]
            }>
              {row.cells.map((cell) => {
                console.log(cell)
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

      {feeTable.length > 4 ?

        <div>
          <button className={styles.chartButton} onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
          </button>
          <button className={styles.chartButton} onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </button></div>

        : null}
    </>



  )
}

export default TradeFeeTable