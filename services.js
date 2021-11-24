const ENDPOINT = 'https://aircall-job.herokuapp.com';

const getFeed = (onSuccess = () => { }) => {
    fetch(ENDPOINT + '/activities')
        .then((response) => response.json())
        .then((data) => onSuccess(data));
};

const getCall = (id, onSuccess = () => { }) => {
    fetch(ENDPOINT + '/activities/' + id)
        .then((response) => response.json())
        .then((data) => onSuccess(data));
};

const updateCall = (id, archived, onSuccess = () => { }) => {
    fetch(ENDPOINT + '/activities/' + id, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ is_archived: archived })
    }).then((response) => response.json())
        .then((data) => onSuccess(data));
};

const resetCalls = (onSuccess = () => { }) => {
    fetch(ENDPOINT + '/reset')
        .then((response) => response.json())
        .then((data) => onSuccess(data));
};

export {
    getFeed,
    getCall,
    updateCall,
    resetCalls
};
