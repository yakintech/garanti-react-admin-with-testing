import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { baseApi } from '../../../api/baseApi'
import GDataGrid from '../../../components/core-components/data-grid'
import { OrderModel } from './models/OrderModel'
import { GridColDef } from '@mui/x-data-grid'

function List() {

  const { data } = useQuery({
    queryKey: ["/orders"],
    queryFn: () => {
      return baseApi.getAll<OrderModel[]>("/orders")
    }
  })

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      flex: 1
    },
    {
      field: 'customerId',
      headerName: 'Customer Id',
      flex: 1
    },
    {
      field: 'orderDate',
      headerName: 'Order Date',
      flex: 1
    },
    {
      field: 'shippedDate',
      headerName: 'Shiped Date',
      flex: 1
    },
    {
      field: 'requiredDate',
      headerName: 'Required Date',
      flex: 1
    }
  ]

  return <>
    <div style={{ height: 600, width: '100%' }}>
      <GDataGrid
        rows={data}
        columns={columns}
      />
    </div>
  </>
}

export default List