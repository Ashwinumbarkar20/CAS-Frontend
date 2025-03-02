const express =require("express")
const router=require("./Routes/Authrouter")
const PORT=5000;
const app=express();
app.use("/auth",router);
app.use(express.json())

app.listen(PORT,()=>{console.log("server has been started")})
