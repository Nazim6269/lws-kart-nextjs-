import { getAllProducts } from "@/database/queries/productsQuery";
import { NextResponse } from "next/server";

export  async function GET(request) {
   try{
     const searchParams = request.nextUrl.searchParams;

    const categories = searchParams.get("categories") || [];
    const page = searchParams.get("page") || 1;
    const min = searchParams.get("min") || 0;
    const max = searchParams.get("max") || 1000000;
    const limit = searchParams.get("limit") || 20;

    const data = await getAllProducts(limit, page, categories, min, max);
    
    return  NextResponse.json({products:data},{status:200})
    } catch (error) {
        return NextResponse.json({message:"failed to fetch data"},{status:500})
    }
}

