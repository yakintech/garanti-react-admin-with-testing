import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { baseApi } from '../../../api/baseApi'
import GDataGrid from '../../../components/core-components/data-grid'
import { OrderModel } from './models/OrderModel'
import { GridColDef } from '@mui/x-data-grid'
import { useNavigate } from 'react-router-dom'
import GButton from '../../../components/core-components/button'

function List() {

  const { data, isLoading } = useQuery({
    queryKey: ["/orders"],
    queryFn: () => {
      return baseApi.getAll<OrderModel[]>("/orders")
    }
  })

  const navigate = useNavigate()

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
    },
    {
      field:"detail",
      headerName:"Detail",
      flex:1,
      renderCell: (params) => (
        <GButton onClick={() => navigate(`/orders/detail/${params.row.id}`)}>Detail</GButton>
      )
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