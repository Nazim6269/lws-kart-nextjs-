import { getAllProducts } from "@/database/queries/productsQuery";
import { NextResponse } from "next/server";

export  async function GET(req) {
    try {
        const data= await getAllProducts()
        return NextResponse.json(data)
    } catch (error) {
        return new Response(JSON.stringify({
            message:"failed to fetch data",
            success:false
        }),{status:400})
    }
}

