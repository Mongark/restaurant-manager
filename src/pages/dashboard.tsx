import { Circle } from "@mui/icons-material";
import { 
    Button, 
    Card, 
    FormControl, 
    Grid, 
    MenuItem, 
    Select, 
    Table, 
    TableBody, 
    TableCell, 
    TableRow, 
    TextField, 
    Typography 
} from "@mui/material";

import TableContainer from '@mui/material/TableContainer';

interface Tab {
    customer_name: string;
    bill: number;
}

interface TableInterface {
    table_name: string;
    tabs: Tab[]; // If tabs.size() > 0, then the table is occupied
}

const TableComponent = (props: TableInterface) => {
    return(
        <Card style={{ padding: "48px", borderRadius: "12px", backgroundColor:"#abd5e2" }}>
            <Typography variant="h4" style={{ display: "flex", fontWeight: 600, alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
                <Circle style={{ marginRight: "28px", color: (props.tabs.length>0) ? "red" : "green" }}/>
                {props.table_name}
            </Typography>

            <Table>
                <TableBody>
                    <TableRow sx={{ height: "30px" }}>
                        <TableCell>
                            <Typography variant="body1">Status:</Typography>
                        </TableCell>
                        <TableCell>
                            {(props.tabs.length>0) ? "Ocupado" : "Livre"}
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ height: "30px" }}>
                        <TableCell>
                            <Typography variant="body1">Tempo em uso:</Typography>
                        </TableCell>
                        <TableCell>
                            4 Horas
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ height: "30px" }}>
                        <TableCell>
                            <Typography variant="body1">Conta:</Typography>
                        </TableCell>
                        <TableCell>
                            R$ 27.31
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ height: "30px" }}>
                        <TableCell>
                            <Typography variant="body1">Comandas:</Typography>
                        </TableCell>
                        <TableCell>
                            2
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <FormControl>
                <Select
                    style={{ width: "120px" }}
                    >
                    <MenuItem value={10}>Livre.</MenuItem>
                    <MenuItem value={10}>Ocupada.</MenuItem>
                </Select>
            </FormControl>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "12px" }}>

                <Button style={{ backgroundColor: "blue", color: "white" }}>
                    Concluir
                </Button>
                <Button style={{ backgroundColor: "red", color: "white" }}>
                    Cancelar
                </Button>
            </div>
        </Card>
    );
};

export const DashboardPage = () => {
    const tables: TableInterface[] = [
        {
            table_name: "Mesa 1",
            tabs: [{customer_name: "John Doe", bill: 22.10}],
        },
        {
            table_name: "Mesa 2",
            tabs: [{customer_name: "John Doe", bill: 22.10}],
        },
        {
            table_name: "Mesa 3",
            tabs: [{customer_name: "John Doe", bill: 22.10}],
        },
        {
            table_name: "Mesa 4",
            tabs: [{customer_name: "John Doe", bill: 22.10}],
        },
        {
            table_name: "Mesa 5",
            tabs: [{customer_name: "John Doe", bill: 22.10}],
        },
        {
            table_name: "Mesa 6",
            tabs: [{customer_name: "John Doe", bill: 22.10}],
        },
        {
            table_name: "Mesa 7",
            tabs: [{customer_name: "John Doe", bill: 22.10}],
        },
        {
            table_name: "Mesa 8",
            tabs: [{customer_name: "John Doe", bill: 22.10}],
        },
    ];

    return(
        <div style={{ padding: "48px" }}>
            <div style={{ display: "flex", flexDirection: "column"}}>
                <Typography style={{ marginBottom: "18px" }} variant="h3">Visão Geral</Typography>

                <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ marginRight: "40px" }}>
                        <TextField label="Mesa" style={{ marginBottom: "24px", marginRight: "24px" }}></TextField>
                        <TextField label="Comanda" style={{ marginBottom: "24px" }}></TextField>
                    </div>

                <Typography variant="h5">Mesas ocupadas: 5/8</Typography>
                </div>
            </div>


            <Grid container gap="32px">
                {tables.map((table) => {
                    return(
                        <Grid xs={8} md={2}>
                            <TableComponent table_name={table.table_name} tabs={table.tabs} />
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}
