import express, { request } from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({message: 'Hello World!'});
});


app.listen(3000);
