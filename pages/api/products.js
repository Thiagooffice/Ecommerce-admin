
import { Product } from "@/models/Products";
import mongoose from "mongoose";

export default async function handler(req, res){
    const {method} = req;


    if(method === "POST"){
        const {title, description, rpice} = req.body
        const productDoc = await Product.create({
            title, description,price
        })
        res.json(productDoc)
    }
}