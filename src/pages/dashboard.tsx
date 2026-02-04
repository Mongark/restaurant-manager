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

interface TableInterface {
    name: string;
    occupied: boolean;
}

const TableComponent = (props: TableInterface) => {
    return(
        <Card style={{ padding: "48px", borderRadius: "12px", backgroundColor:"#abd5e2" }}>
            <Typography variant="h4" style={{ display: "flex", fontWeight: 600, alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
                <Circle style={{ marginRight: "28px", color: (props.occupied ? "red" : "green") }}/>
                {props.name}
            </Typography>

            <Table>
                <TableBody>
                    <TableRow sx={{ height: "30px" }}>
                        <TableCell>
                            <Typography variant="body1">Status:</Typography>
                        </TableCell>
                        <TableCell>
                            {props.occupied ? "Ocupado" : "Livre"}
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
                            <Typography variant="body1">Total a pagar:</Typography>
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
            name: "Mesa 1",
            occupied: true,
        },
        {
            name: "Mesa 2",
            occupied: true,
        },
        {
            name: "Mesa 3",
            occupied: false,
        },
        {
            name: "Mesa 4",
            occupied: true,
        },
        {
            name: "Mesa 5",
            occupied: false,
        },
        {
            name: "Mesa 6",
            occupied: true,
        },
        {
            name: "Mesa 7",
            occupied: true,
        },
        {
            name: "Mesa 8",
            occupied: false,
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
                            <TableComponent name={table.name} occupied={table.occupied} />
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}
