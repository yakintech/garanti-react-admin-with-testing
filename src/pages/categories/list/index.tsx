import { useQuery } from '@tanstack/react-query'
import { baseApi } from '../../../api/baseApi'
import { CategoryModel } from './models/CategoryModel'
import { useNavigate } from 'react-router-dom'
import GButton from '../../../components/core-components/button'
import GDataGrid from '../../../components/core-components/data-grid'

function List() {

  const { data } = useQuery({
    queryKey: ['categories'],
    queryFn: () => {
      return baseApi.getAll<CategoryModel[]>('/categories')
    }
  })

  const navigate = useNavigate()

  return <>
    <GButton variant="contained" onClick={() => navigate('/categories/add')}>Create</GButton>
    <hr />
    <GDataGrid
      rows={data}
      columns={[
        { field: 'id', headerName: 'ID', flex: 1 },
        { field: 'name', headerName: 'Name', flex: 2 },
        { field: 'description', headerName: 'Description', flex: 2 },
        {
          field: 'actions', headerName: 'Actions', flex: 2,
          //go to detail
          renderCell: (params) => (
            <button onClick={() => navigate(`/categories/${params.row.id}`)}>Detail</button>
          )
        }
      ]}
    />
  </>
}

export default List