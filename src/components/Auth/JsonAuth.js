import axios from 'axios';

const token = '[the token you received from the POST request above]';

const httpClient = axios.create({
    baseURL: 'https://jsonapi-sandbox.herokuapp.com/',
    headers: {
        'Content-Type': 'application/vnd.api+json',
        Authorization: `Bearer ${token}`,
    },
});
