const express=require("express")
const {Mobilemodel}=require("../models/mobile.model")
const mobileRouter=express.Router()

mobileRouter.post("/add",async(req,res)=>{
    try {
        const mobile=new Mobilemodel(req.body)
        await mobile.save()
        res.send({msg:"Mobile added"})
    } catch (error) {
        res.send(error)
    }
})
mobileRouter.get("/",async(req,res)=>{
    const {no}=req.params
    const skip=(no-1)*12
    try {
        const data=await Mobilemodel.find().skip(skip).limit(12)
        res.status(200).send({"msg":"All the Data",data})
    } catch (error) {
        res.send(error)
    }
})

mobileRouter.get("/samsung",async(req,res)=>{
    // const{q}=req.query
    const {no}=req.params
    const skip=(no-1)*12
    try {
            const data=await Mobilemodel.find({description:{$regex:"samsung",$options:'i'}}).skip(skip).limit(12)
            res.status(200).send({"msg":"All the Data",data})   
    } catch (error) {
        res.send(error)
    }
})
mobileRouter.get("/redmi",async(req,res)=>{
    // const{q}=req.query
    const {no}=req.params
    const skip=(no-1)*12
    try {
            const data=await Mobilemodel.find({description:{$regex:"redmi",$options:'i'}}).skip(skip).limit(12)
            res.status(200).send({"msg":"All the Data",data})   
    } catch (error) {
        res.send(error)
    }
})
mobileRouter.get("/realme",async(req,res)=>{
    // const{q}=req.query
    const {no}=req.params
    const skip=(no-1)*12
    try {
            const data=await Mobilemodel.find({description:{$regex:"realme",$options:'i'}}).skip(skip).limit(12)
            res.status(200).send({"msg":"All the Data",data})   
    } catch (error) {
        res.send(error)
    }
})
mobileRouter.get("/tecno",async(req,res)=>{
    // const{q}=req.query
    const {no}=req.params
    const skip=(no-1)*12
    try {
            const data=await Mobilemodel.find({description:{$regex:"tecno",$options:'i'}}).skip(skip).limit(12)
            res.status(200).send({"msg":"All the Data",data})   
    } catch (error) {
        res.send(error)
    }
})
mobileRouter.get("/lava",async(req,res)=>{
    // const{q}=req.query
    const {no}=req.params
    const skip=(no-1)*12
    try {
            const data=await Mobilemodel.find({description:{$regex:"lava",$options:'i'}}).skip(skip).limit(12)
            res.status(200).send({"msg":"All the Data",data})   
    } catch (error) {
        res.send(error)
    }
})
mobileRouter.get("/nokia",async(req,res)=>{
    // const{q}=req.query
    const {no}=req.params
    const skip=(no-1)*12
    try {
            const data=await Mobilemodel.find({description:{$regex:"nokia",$options:'i'}}).skip(skip).limit(12)
            res.status(200).send({"msg":"All the Data",data})   
    } catch (error) {
        res.send(error)
    }
})
mobileRouter.get("/itel",async(req,res)=>{
    // const{q}=req.query
    const {no}=req.params
    const skip=(no-1)*12
    try {
            const data=await Mobilemodel.find({description:{$regex:"itel",$options:'i'}}).skip(skip).limit(12)
            res.status(200).send({"msg":"All the Data",data})   
    } catch (error) {
        res.send(error)
    }
})
mobileRouter.get("/oppo",async(req,res)=>{
    // const{q}=req.query
    const {no}=req.params
    const skip=(no-1)*12
    try {
            const data=await Mobilemodel.find({description:{$regex:"oppo",$options:'i'}}).skip(skip).limit(12)
            res.status(200).send({"msg":"All the Data",data})   
    } catch (error) {
        res.send(error)
    }
})
mobileRouter.get("/:no",async(req,res)=>{
    const {no}=req.params
    const skip=(no-1)*12
    try {
        const data=await Mobilemodel.find().skip(skip).limit(12)
        res.status(200).send({"msg":"All the Data",data})
    } catch (error) {
        res.send(error)
    }
})
mobileRouter.get("/asc",async(req,res)=>{
    try {
        const data=await Mobilemodel.find().sort({price:1})
        res.status(200).send({"msg":"All the Data",data})
    } catch (error) {
        res.send(error)
    }
})
mobileRouter.get("/dsc",async(req,res)=>{
    try {
        const data=await Mobilemodel.find().sort({price:-1})
        res.status(200).send({"msg":"All the Data",data})
    } catch (error) {
        res.send(error)
    }
})


// mobileRouter.get("/samsumg/",async(req,res)=>{
//     const {q}=req.query
//     //const {no}=req.params
//     //const skip=(no-1)*12
//     try {
//         // const movies=await MovieModel.find({Title:{$regex:q,$options:'i'}})
//         const data=await Mobilemodel.find({description:{$regex:q,$options:'i'}})
//         res.status(200).send({"msg":"All the Data",data})
//     } catch (error) {
//         res.send(error)
//     }
// })

// mobileRouter.get("/",async(req,res)=>{
//     // const{q}=req.query
//     const {no}=req.params
//     const skip=(no-1)*12
//     try {
//         if(q!==undefined){
//             const data=await Mobilemodel.find({description:{$regex:"samsung",$options:'i'}}).skip(skip).limit(12)
//             res.status(200).send({"msg":"All the Data",data})
//         }else{
//             const data=await Mobilemodel.find()
//             res.status(200).send({"msg":"All the Data",data}).skip(skip).limit(12)
//         }
        
//     } catch (error) {
//         res.send(error)
//     }
// })
module.exports={mobileRouter}