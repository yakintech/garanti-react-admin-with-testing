import { DataGrid } from "@mui/x-data-grid";


interface DataGridProps  extends React.ComponentProps<typeof DataGrid> {

}

const GDataGrid: React.FC<DataGridProps> = ({ ...rest }) => {
    return <DataGrid {...rest} />
}


export default GDataGrid;