import React, { useState } from "react";
import {
    Card,
    FormControl,
    Grid,
    TextField,
    Typography,
    Button,
    Box,
    MenuItem,
    Select,
} from "@mui/material";
import { MaterialReactTable } from "material-react-table";

export default function Home() {
    const [machine, setMachine] = useState("");
    const [shift, setShift] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");

    const columns = [
        {
            accessorKey: "id",
            header: "ID",
        },
        {
            accessorKey: "name",
            header: "Name",
        },
        {
            accessorKey: "status",
            header: "Status",
        },
    ];

    const data = [
        { id: 1, name: "Machine A", status: "Running" },
        { id: 2, name: "Machine B", status: "Stopped" },
    ];

    return (
        <Card sx={{ p: 3, mx: "auto" }}>
            {/* Title */}
            <Typography
                variant="h4"
                textAlign="center"
                sx={{ pb: 2, fontWeight: "bold" }}
            >
                Machine 1
            </Typography>

            {/* Date & Machine Selection */}
            <Grid container spacing={2} columnSpacing={8} alignItems="center">
                {/* From Date */}
                <Grid item xs={12} sm={6} md={4}>
                    <Typography>From Date</Typography>
                    <TextField
                        fullWidth
                        type="date"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                    />
                </Grid>

                {/* To Date */}
                <Grid item xs={12} sm={6} md={4}>
                    <Typography>To Date</Typography>
                    <TextField
                        fullWidth
                        type="date"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                    />
                </Grid>

                {/* Machine Selection */}
                <Grid item xs={12} sm={6} md={4}>
                    <Typography>Machine</Typography>
                    <FormControl fullWidth>
                        <Select value={machine} onChange={(e) => setMachine(e.target.value)}>
                            <MenuItem value="Machine 1">Machine 1</MenuItem>
                            <MenuItem value="Machine 2">Machine 2</MenuItem>
                            <MenuItem value="Machine 3">Machine 3</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                {/* Shift Selection */}
                <Grid item xs={12} sm={6} md={4}>
                    <Typography>Shift</Typography>
                    <FormControl fullWidth>
                        <Select value={shift} onChange={(e) => setShift(e.target.value)}>
                            <MenuItem value="6AM-2PM">6AM-2PM</MenuItem>
                            <MenuItem value="2PM-10PM">2PM-10PM</MenuItem>
                            <MenuItem value="10PM-6AM">10PM-6AM</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                {/* Buttons */}
                <Grid item xs={12} sm={12} md={12} display="flex" gap={2} justifyContent="flex-end">
                    <Button variant="contained">Submit</Button>
                    <Button variant="contained" color="success">
                        Export to Excel
                    </Button>
                </Grid>
            </Grid>

            {/* Data Table */}
            <Box mt={3}>
                <MaterialReactTable
                    columns={columns}
                    data={data}
                    enableTopToolbar
                    positionActionsColumn="last"
                />
            </Box>
        </Card>
    );
}
