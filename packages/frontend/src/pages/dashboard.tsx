import { Circle, Delete, Note, Send } from "@mui/icons-material";
import { 
    Box,
    Button, 
    Card, 
    FormControl, 
    Grid, 
    InputLabel, 
    MenuItem, 
    Paper, 
    Select, 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableRow, 
    TextField, 
    Typography 
} from "@mui/material";

interface Item {
    name: string;
    price: number;
}

interface Order {
    name: string;
    items: Item[];
}

interface Tab {
    name: string;
    table: string;
    orders: Order[];
}

interface TableInterface {
    table_name: string;
}

const TableComponent = (props: TableInterface) => {
    return(
        <Card style={{ padding: "8px", borderRadius: "12px", backgroundColor:"#abd5e2" }}>
            <Typography variant="h4" style={{ display: "flex", fontWeight: 600, alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
                <Circle style={{ marginRight: "28px", color: (true) ? "red" : "green" }}/>
                {props.table_name}
            </Typography>

            <Box sx={{ minWidth: 120, marginLeft: "16px", marginRight: "16px" }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                    <Select
                    labelId="table-card-select-label"
                    id="table-card-select"
                    value={"item1"}
                    label="Estado" // Required if you use FormControl with InputLabel for proper shrinking
                    // onChange={handleChange}
                    >
                    <MenuItem value={"item1"}>Desocupado</MenuItem>
                    <MenuItem value={"item2"}>Ocupado</MenuItem>
                    <MenuItem value={"item3"}>Pediu conta</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Table size="small">
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Typography variant="body1">Tempo:</Typography>
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

            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", marginTop: "12px" }}>

                <Button style={{ fontSize: 12, backgroundColor: "red", color: "white" }}>
                    <Delete sx={{ marginRight: "2px" }} />
                    Cancelar
                </Button>
                <Button style={{ fontSize: 12, backgroundColor: "green", color: "white" }}>
                    <Note sx={{ marginRight: "2px" }} />
                    Pedido
                </Button>
                <Button style={{ fontSize: 12, backgroundColor: "blue", color: "white" }}>
                    <Send sx={{ marginRight: "2px" }} />
                    Fechar
                </Button>
            </div>
        </Card>
    );
};

export const DashboardPage = () => {
    const tables: TableInterface[] = [
        {
            table_name: "Mesa 1",
        },
        {
            table_name: "Mesa 2",
        },
        {
            table_name: "Mesa 3",
        },
        {
            table_name: "Mesa 4",
        },
        {
            table_name: "Mesa 5",
        },
        {
            table_name: "Mesa 6",
        },
        {
            table_name: "Mesa 7",
        },
        {
            table_name: "Mesa 8",
        },
    ];

    const tabs: Tab[] = [
        {
            name: "John Doe",
            table: "1",
            orders: [
                {
                    name: "1",
                    items: [
                        {
                            name: "Potato Chips",
                            price: 21.99,
                        }
                    ]
                }
            ]
        },
        {
            name: "Jane Doe",
            table: "2",
            orders: [
                {
                    name: "2",
                    items: [
                        {
                            name: "Burger",
                            price: 12.99,
                        }
                    ]
                }
            ]
        },
        {
            name: "Benny Choi",
            table: "3",
            orders: [
                {
                    name: "3",
                    items: [
                        {
                            name: "Potato Chips",
                            price: 21.99,
                        }
                    ]
                }
            ]
        },
        {
            name: "Donnie Darko",
            table: "2",
            orders: [
                {
                    name: "4",
                    items: [
                        {
                            name: "Roasted Beef",
                            price: 36.99,
                        }
                    ]
                }
            ]
        },
    ]

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


            <div style={{ display: "flex" }}>
                <Grid container gap="32px">
                    {tables.map((table) => {
                        return(
                            <Grid xs={3} md={3}>
                                <TableComponent table_name={table.table_name} />
                            </Grid>
                        );
                    })}
                </Grid>

                <Paper sx={{ padding: "24px", marginRight: "18px", width: "24vw", borderRadius: "18px", backgroundColor:"#cfe9f1" }}>
                    <Typography variant="h6">Comandas</Typography>
                    <hr />
                    {
                        tabs.map((tab) => {
                            return(
                                <Card sx={{ padding: "12px", marginBottom: "8px" }}>
                                    <Table size="small">
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>
                                                    <Typography variant="body1">Comanda:</Typography>
                                                </TableCell>
                                                <TableCell>
                                                    {tab.name}
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <Typography variant="body1">Mesa:</Typography>
                                                </TableCell>
                                                <TableCell>
                                                    {tab.table}
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
                                        </TableBody>
                                    </Table>
                                </Card>
                            );
                        })
                    }
                </Paper>

                <Paper sx={{ padding: "24px", width: "24vw", borderRadius: "18px", backgroundColor:"#cfe9f1" }}>
                    <Typography variant="h6">Pedidos</Typography>
                    <hr />
                    {
                        tabs.map((tab: Tab) => {
                            return(
                                <>
                                    {tab.orders.map((order: Order) => {
                                        return(
                                            <>
                                                <Card sx={{ padding: "12px", marginBottom: "8px" }}>
                                                    <Table size="small">
                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell>
                                                                    <Typography variant="body1">Pedido:</Typography>
                                                                </TableCell>
                                                                <TableCell>
                                                                    { order.name }
                                                                </TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </Table>

                                                    <Table size="small" sx={{ backgroundColor: "white" }}>
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell>
                                                                    <Typography variant="body1">Nome:</Typography>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <Typography variant="body1">Preço:</Typography>
                                                                </TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            {
                                                                order.items.map((item) => {
                                                                    return(
                                                                        <TableRow>
                                                                            <TableCell>
                                                                                <Typography variant="body1">{item.name}</Typography>
                                                                            </TableCell>
                                                                            <TableCell>
                                                                                <Typography variant="body1">{item.price}</Typography>
                                                                            </TableCell>
                                                                        </TableRow>
                                                                    );
                                                                })
                                                            }
                                                        </TableBody>
                                                    </Table>
                                                </Card>
                                            </>
                                        );
                                    })}
                                </>
                            );
                        })
                    }
                </Paper>
            </div>
        </div>
    );
}
