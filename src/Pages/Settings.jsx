import React, { useState } from "react";
import { Box, Grid, TextField, MenuItem, FormControl, InputLabel, Select, Card, CardContent, Typography, Button, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Settings() {
    const [shift, setShift] = useState("");
    const [emails, setEmails] = useState([{ id: 1, address: "" }]);

    const handleAddRow = () => {
        setEmails([...emails, { id: emails.length + 1, address: "" }]);
    };

    const handleRemoveRow = (id) => {
        setEmails(emails.filter(email => email.id !== id));
    };

    const handleEmailChange = (id, value) => {
        setEmails(emails.map(email => email.id === id ? { ...email, address: value } : email));
    };

    return (
        <>
            <Card sx={{ m: 3, mx: "auto", mt: 4, boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom mb={'20px'}>
                        Shift Timing Settings
                    </Typography>
                    <Grid container spacing={3}>
                        {/* From Time */}
                        <Grid item xs={12} sm={4}>
                            <Typography>From time</Typography>
                            <TextField
                                fullWidth
                                type="time"
                                InputLabelProps={{ shrink: true }}
                                inputProps={{ step: 300 }} // 5 min interval
                            />
                        </Grid>

                        {/* To Time */}
                        <Grid item xs={12} sm={4}>
                            <Typography>To time</Typography>
                            <TextField
                                fullWidth
                                type="time"
                                InputLabelProps={{ shrink: true }}
                                inputProps={{ step: 300 }} // 5 min interval
                            />
                        </Grid>

                        {/* Shift Selection */}
                        <Grid item xs={12} sm={4}>
                            <Typography>Shift</Typography>
                            <FormControl fullWidth>

                                <Select value={shift} onChange={(e) => setShift(e.target.value)} label="Shift">
                                    <MenuItem value="1st Shift">1st Shift</MenuItem>
                                    <MenuItem value="2nd Shift">2nd Shift</MenuItem>
                                    <MenuItem value="3rd Shift">3rd Shift</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            <Card sx={{ margin: 20, mx: "auto", mt: 4, boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom mb={'20px'}>
                        Mail Settings
                    </Typography>

                    <Grid container spacing={3}>
                        {emails.map((email, index) => (
                            <React.Fragment key={email.id}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label={`Mail Address ${index + 1}`}
                                        value={email.address}
                                        onChange={(e) => handleEmailChange(email.id, e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <IconButton onClick={() => handleRemoveRow(email.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                            </React.Fragment>
                        ))}
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleAddRow}>
                                Add Email
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    );
}
