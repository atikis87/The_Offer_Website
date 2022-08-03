import express from 'express';
import path from 'path';

const app = express();
const api = express();


//Set static folder
app.use(express.static(path.join('public')));
const PORT = process.env.PORT || 5000;

api.use(express.static(path.join('api')));
const PORTAPI = process.env.PORTAPI || 5002;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
api.listen(PORTAPI, () => console.log(`Server started on port ${PORTAPI}`));