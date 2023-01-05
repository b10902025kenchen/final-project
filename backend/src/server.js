import mongoose from 'mongoose';
import dotenv from "dotenv-defaults";
import cors from 'cors';
import db from './db';
import routes from './routes';
import express from 'express';
import http from "http";
import wsConnect from './wsConnect';
import WebSocket from "ws";
import {v4 as uuidv4} from 'uuid';
import path from "path";

const app = express();
console.log(process.env.NODE_ENV);
app.use(cors());
app.use(express.json());

// if (process.env.NODE_ENV === "production") {
//    console.log("in production");
//    const __dirname = path.resolve();
//    app.use(express.static(path.join(__dirname, "../frontend", "build")));
//    app.get("/*", function (req, res) {
//      res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
//    });
//  }

const port = process.env.PORT || 4000;
app.use('/', routes);
db.connect();

const server = http.createServer(app)
const wss = new WebSocket.Server({ server })

const DB = mongoose.connection

DB.once('open', () => {
 console.log("MongoDB connected!");
 wss.on("connection", (ws) => {
    ws.id = uuidv4();
    ws.box = '';
    ws.onmessage = wsConnect.onMessage(wss, ws);
 console.log("WebSocket Connected");
 });
});
server.listen(port, () => { console.log(`Example app listening on port ${port}!`) });

// db.connect();
// dotenv.config();

// const app = express();

// const server = http.createServer(app)
// const wss = new WebSocket.Server({ server })

// const DB = mongoose.connection;

// DB.once('open', () => {
//   wss.on("connection", (ws) => {
//     ws.id = uuidv4();
//     ws.box = '';
//     ws.onmessage = wsConnect.onMessage(wss, ws);
//     console.log("Websocket connected!")
//   });
//  });

//  const port = process.env.PORT || 4001;
//  server.listen(port, () => { console.log(`Example app listening on port ${port}!`) });

// app.get('/', (req, res) => {
//  res.send('Hello, World!');
// });

// app.listen(port, () =>
//  console.log(`Example app listening on port ${port}!`),
// );

// mongoose.connect(process.env.MONGO_URL, {
//    useNewUrlParser: true,
//    useUnifiedTopology: true
//  })
//  .then((res) => console.log("mongo db connection created"));

//const app = express()