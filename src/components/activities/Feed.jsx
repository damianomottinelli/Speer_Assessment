import { RestartAlt } from '@mui/icons-material';
import { Fab, List, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getFeed, resetCalls } from '../../api/services';
import Card from '../common/Card.jsx';

const Feed = () => {
    let [calls, setCalls] = useState([]);
    let navigate = useNavigate();

    const loadFeed = () => {
        getFeed(setCalls);
    };

    useEffect(() => {
        loadFeed();
    }, []) //Did Mount

    return (
        <React.Fragment>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {calls && calls.map((call) => {
                    return !call.is_archived &&
                        <Card
                            key={call.id}
                            created_at={call.created_at}
                            direction={call.direction}
                            from={call.from}
                            to={call.to}
                            via={call.via}
                            duration={call.duration}
                            call_type={call.call_type}
                            navigate={() => navigate('/' + call.id)}
                        />
                })
                }
            </List>
            <Fab
                color="primary"
                aria-label="reset"
                onClick={() => { resetCalls(loadFeed) }}
                sx={{ position: 'fixed', right: '38%', bottom: '5%' }}>
                <RestartAlt />
            </Fab>
        </React.Fragment>
    );
}

export default Feed;