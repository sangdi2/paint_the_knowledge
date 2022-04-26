import express from "express"

import urouter from "./router/user_router.js"

const app =express()

app.use('/api',urouter)

app.listen(8089,()=>{
    console.log('http://localhost:8089')
})