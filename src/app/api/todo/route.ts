import { NextRequest,NextResponse } from "next/server";
import {sql} from '@vercel/postgres'
import {Todo,NewTodo,todoTable,db} from "@/lib/drizzle"

export async function GET(request:NextRequest){
    try {
        await sql`CREATE TABLE IF NOT EXISTS Todos(id serial, Task varchar(255));`

        //select statement data koo array kii form mainn return karay ga
        const res:Todo[] = await db.select().from(todoTable);
        // const res = await sql`SELECT * FROM Todos`;
        // console.log("===>")
        // console.log(res);
        // console.log(res[0].id)
        // console.log(res[0].task)
        return NextResponse.json({data: res})
    } catch (error) {
        console.log((error as {message:string}).message);
        return  NextResponse.json({message: "Something Went Wrong !", error});
        
    }
}

export async function POST(request:NextRequest){
    const req =  await request.json();
    try {
        if(req.task){

            await sql`INSERT INTO Todos (Task) VALUES(${req.task})`

            const res = await db.insert(todoTable).values({
                task: req.task,
            }).returning();

            console.log(res);
            
            return NextResponse.json({res})
        }
        else{
            throw new Error('Task field is required !');
        }
    } catch (error) {
        return NextResponse.json({message: ((error as {message:string}).message)})
    }
}