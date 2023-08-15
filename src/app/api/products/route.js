import { NextResponse } from "next/server"
import db from '@/db.json'

export const GET = (request) => {
    const url = new URL(request.url);
    const { searchParams } = url;
    // console.log(url);
    // console.log(searchParams.get("categoryID"));
    const categoryID = searchParams.get("categoryID");

    let products = db.products;
    if (categoryID) {
        products = products.filter(product => product.categoryID === +categoryID)
    }

    return NextResponse.json(products)
}


export const POST = async (request) => {
    const body = await request.json();
    db.products.push(body);
    return NextResponse.json(products)
}