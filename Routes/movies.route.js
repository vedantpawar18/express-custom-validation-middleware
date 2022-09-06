const express=require("express");

const moviesRouter= express.Router()

moviesRouter.post("/", (req,res)=>{
    res.send("welcome to movies page")
})

module.exports= moviesRouter;