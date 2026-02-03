import { Circle } from "@mui/icons-material";
import { Card, Grid, Paper, TextField, Typography } from "@mui/material";

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
            <div style={{ display: "grid" }}>
                <Typography variant="body1">Status: {props.occupied ? "Ocupado" : "Livre"}</Typography>
                <Typography variant="body1">Tempo em uso: 12h</Typography>
                <Typography variant="body1">Total a pagar: R$ 27,45</Typography>
                <Typography variant="body1">Comandas: 2</Typography>
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
