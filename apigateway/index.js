const express=require("express")
const cors=require("cors")
const axios = require("axios");
const app=express()
app.use(cors("*"));
app.use(express.json());

app.use(async (req,res,next) => {
    const servicename = req.path.split("/")[1];
    console.log(servicename);
    const serviceres = await axios.get(
        `http://localhost:3000/getservice/${servicename}`
    );
    const alllocation = await axios.get(serviceres.data.url);
    res.send(alllocation.data);
})


app.listen(3012, () => {
   console.log("api gateway started");
})