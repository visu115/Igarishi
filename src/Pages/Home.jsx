import { Card, FormControl, Grid, TextField, Typography, Button } from '@mui/material'
import React from 'react'

export default function Home() {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <Card sx={{ padding: '10px 10px' }}>
                <Typography sx={{ textAlign: 'center', justifyContent: 'center' }}>Machine 1</Typography>
                <Grid container alignItems={'center'} spacing={2}>
                    <Grid item xl={2} lg={2}>
                        <Typography>From date</Typography>
                    </Grid>

                    <Grid item xl={2} lg={2}>
                        <FormControl fullWidth>
                            <TextField type='date' variant='outlined' />

                        </FormControl>
                    </Grid>
                    <Grid item xl={2} lg={2}>
                        <Typography>From date</Typography>
                    </Grid>

                    <Grid item xl={2} lg={2}>
                        <FormControl fullWidth>
                            <TextField type='date' variant='outlined' />

                        </FormControl>
                    </Grid>
                    <Grid item xl={2} lg={2}>
                        <Button variant='contained'>
                            Excel export
                        </Button>
                    </Grid>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
            </Card>
        </>
    )
}
