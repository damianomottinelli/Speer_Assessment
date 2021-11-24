import { Archive, ArrowBack, PhoneCallback, PhoneForwarded, PhoneMissed } from '@mui/icons-material';
import { DateTimePicker } from '@mui/lab';
import { Grid, IconButton, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getCall, updateCall } from '../../api/services';

const Detail = () => {
    let [call, setCall] = useState({});
    let params = useParams();
    let navigate = useNavigate();

    const archiveCall = (id, archived) => {
        updateCall(id, archived, () => navigate('/'));
    };

    useEffect(() => {
        getCall(params.id, setCall);
    }, []);

    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid xs={4}>
                    <div style={{ position: 'relative', zIndex: 1, margin: '10px 0px 10px 10px' }}>
                        <Link
                            style={{ textDecoration: "none" }}
                            to={'/'}
                            key={'Feed'}>
                            <ArrowBack />
                        </Link>
                    </div>
                </Grid>
                <Grid xs={8}>
                    <Typography variant="h4" gutterBottom component="div">
                        Detail
                    </Typography>
                </Grid>
            </Grid>
            {call && call.id &&
                <Grid container direction="column" spacing={2}>
                    <Grid item xs container spacing={2}>
                        <Grid item xs={8} direction="column" spacing={2}>
                            <Grid item xs={12}>
                                {call.from &&
                                    <TextField
                                        id="standard-read-only-input"
                                        label="From"
                                        defaultValue={call.from}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="standard"
                                    />
                                }
                            </Grid>
                            <Grid item xs={12}>
                                {call.to &&
                                    <TextField
                                        id="standard-read-only-input"
                                        label="To"
                                        defaultValue={call.to}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="standard"
                                    />
                                }
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                            {(call.call_type || call.direction) &&
                                call.call_type === 'missed' ? <PhoneMissed sx={{ fontSize: 40, marginTop: '20px' }} color="error" /> :
                                (
                                    call.direction === 'outbound' ? <PhoneForwarded sx={{ fontSize: 40, marginTop: '20px' }} color="success" /> :
                                        <PhoneCallback sx={{ fontSize: 40, marginTop: '20px' }} color="success" />
                                )
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs container spacing={2}>
                        <Grid item xs={6}>
                            {call.via &&
                                <TextField
                                    id="standard-read-only-input"
                                    label="Via"
                                    defaultValue={call.via}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    variant="standard"
                                />
                            }
                        </Grid>
                        <Grid item xs={6}>
                            {call.duration &&
                                <TextField
                                    id="standard-read-only-input"
                                    label="Duration"
                                    defaultValue={call.duration}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    variant="standard"
                                />
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs container spacing={2}>
                        <Grid item xs={9}>
                            {call.created_at &&
                                <DateTimePicker
                                    renderInput={(props) => <TextField {...props} />}
                                    label="Date"
                                    value={call.created_at}
                                    onChange={() => { }}
                                    readOnly
                                />
                            }
                        </Grid>
                        <Grid item xs={3}>
                            <IconButton aria-label="archive" onClick={() => { archiveCall(call.id, true) }}>
                                <Archive sx={{ fontSize: 40 }} color="warning" />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            }
        </React.Fragment>
    );
};

export default Detail;