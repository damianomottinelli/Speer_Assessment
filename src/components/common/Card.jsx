import { PhoneCallback, PhoneForwarded, PhoneMissed } from '@mui/icons-material';
import { Grid, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import moment from 'moment';
import React from 'react';

const Card = ({ created_at = moment(), direction, from = '', to = '', call_type, navigate = () => { } }) => {
    return (
        <ListItemButton divider onClick={navigate}>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <ListItemAvatar>
                        {call_type === 'missed' ? <PhoneMissed fontSize='large' color="error" /> :
                            (direction === 'outbound' ? <PhoneForwarded fontSize='large' color="success" /> :
                                <PhoneCallback fontSize='large' color="success" />
                            )
                        }
                    </ListItemAvatar>
                </Grid>
                <Grid item xs={8} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <ListItemText primary={from} secondary={to} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    {moment(created_at).format("Do,MMM h:mmA")}
                </Grid>
            </Grid>
        </ListItemButton>
    );
};

export default Card;