const express= require("express");
const moviesRouter = require("./Routes/movies.route");
const app= express();
app.use(express.json());

const validator= (req, res, next)=>{
   let {id, name, rating, description, genre, cast}= req.body;
   if (typeof(id)=="number" && typeof(name)=="string" && typeof(rating)=="number" && typeof(description)=="string" && typeof(genre)=="string" && typeof(cast)=="object" )
   {
    next()
   }
   else{
    res.send("bad request 404")
   }
    
}


app.get("/", (req,res)=>{
    console.log("homepage")
    res.send("homepage")
})

app.use(validator);

app.use("/movies", moviesRouter)

// app.post("/movies",validator, (req,res)=>{
//     // console.log("movies page")
//     res.send("movies page")
// })

app.listen(7000, ()=>{
    console.log("listening to 7000")
})