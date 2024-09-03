const express=require("express")
const cors=require("cors")
const app=express()
app.use(cors("*"));
app.use(express.json());
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
app.get("/location", async (req, res)=>{
    const alllocation = await prisma.location_service.findMany();
    res.send(alllocation);
});

app.get("/healthcheck", (req,res) =>{
    const healthobj = {
        request_time: new Date().toString(),
        connectivity: prisma.$connect? "connected" : "not connected",
        status: "working"
    };
    res.send(healthobj);
})

app.listen(5012, ()=>{
    console.log("location services started");
})