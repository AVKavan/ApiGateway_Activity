const express=require("express")
const cors=require("cors")
const app=express()
app.use(cors("*"));
app.use(express.json());
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
app.get("plans/", async (req, res)=>{
    const allplans = await prisma.plan.findMany();
    res.send(allplans);
});

app.listen(5012, ()=>{
    console.log("plan services started");
})