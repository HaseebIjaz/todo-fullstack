import { NextRequest,NextResponse } from "next/server";
import {db, sql} from '@vercel/postgres'

export async function GET(request:NextRequest){
    db.connect()
    try {
        await sql`CREATE TABLE IF NOT EXISTS Todos(id serial, Task varchar(255));`
        const res = await sql`SELECT * FROM Todos`;
        console.log(res);
        return NextResponse.json({data: res.rows})
    } catch (error) {
        return  NextResponse.json({message: "Something Went Wrong !", error});
        
    }
}

export async function POST(request:NextRequest){
    const client = await db.connect()
    const req =  await request.json();
    try {
        if(req.task){
            await client.sql`INSERT INTO Todos (Task) VALUES(${req.task})`
            return NextResponse.json({message: "Task ADDED Successfully"})
        }
        else{
            throw new Error('Task field is required !');
        }
    } catch (error) {
        return NextResponse.json({message: ((error as {message:string}).message)})
    }
}