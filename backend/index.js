import express from "express";
import body_parser from"body-parser";
import { router_users } from "./src/router/router.users.js";
import cors from"cors"


const server= express();
const port = 4000;
server.use(cors())
server.use(body_parser.json());
server.use(body_parser.urlencoded({extended:false}));


server.use(router_users)
server.listen(port, ()=>{
    console.log("servidor esta en el "+port)
})