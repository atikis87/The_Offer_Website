import express from 'express';
import path from 'path';
const app = express();

//Set static folder
app.use(express.static(path.join('public')));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));