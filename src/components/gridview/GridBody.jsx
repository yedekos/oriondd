'use client'

import { flexRender } from '@tanstack/react-table'

import { TablePagination } from '@mui/material'

import styles from '@core/styles/table.module.css'

import TablePaginationComponent from '@components/TablePaginationComponent'

import { useSettings } from '@core/hooks/useSettings'

const GridBody = ({ table, onRowClick }) => {
  const { settings } = useSettings()
  const mode = settings.mode

  const lightBgColor = ['#ffffff', '#f0f0f0']
  const darkBgColor = ['#374151', '#1f2937']
  const lightThColor = '#E2E8F0'
  const darkThColor = '#2f335a'

  return (
    <div className='overflow-x-auto'>
      <table className={styles.table}>
        <thead
          style={{
            backgroundColor: mode === 'dark' ? darkThColor : lightThColor
          }}
        >
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder ? null : (
                    <div
                      className='flex items-center cursor-pointer select-none'
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {table.getFilteredRowModel().rows.length === 0 ? (
          <tbody>
            <tr>
              <td colSpan={table.getVisibleFlatColumns().length} className='text-center'>
                Veri Yok
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {table.getRowModel().rows.map((row, index) => (
              <tr
                key={row.id}
                onClick={() => onRowClick(row)} // Satır tıklama işlevi
                style={{
                  cursor: 'pointer', // Tıklanabilir olduğunu göstermek için
                  backgroundColor: mode === 'dark' ? darkBgColor[index % 2] : lightBgColor[index % 2]
                }}
              >
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
      <TablePagination
        component={() => <TablePaginationComponent table={table} />}
        count={table.getFilteredRowModel().rows.length}
        rowsPerPage={table.getState().pagination.pageSize}
        page={table.getState().pagination.pageIndex}
        onPageChange={(_, page) => {
          table.setPageIndex(page)
        }}
      />
    </div>
  )
}

export default GridBody
