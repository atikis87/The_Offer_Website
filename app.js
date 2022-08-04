import express from 'express';
import path from 'path';
const app = express();


app.use(express.static(path.join('public')));
const PORT = process.env.PORT || 5000;

app.listen(PORT, (error) => {
if(error){
    console.log('Something went wrong', error)
}else{
    console.log(`Server listening at http://localhost:${PORT}`);
}});
