const express = require("express");
const app = express();


//con este comando, mongoose.connect inicia la conexion con la db
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true}));




//aqui es donde importamos la funcion de la ruta de bromas del archivo jokes.routes.js

const AllMyJokeRoutes = require("./server/routes/jokes.routes");
AllMyJokeRoutes(app);

app.listen(8000,()=>console.log("The server is up on port 8000"));