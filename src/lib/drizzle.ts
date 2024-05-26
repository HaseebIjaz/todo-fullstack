//import types
import {
    pgTable,
    serial,
    text,
    varchar,
    timestamp,
    boolean
} from "drizzle-orm/pg-core"
import {sql} from "@vercel/postgres"
import {drizzle} from "drizzle-orm/vercel-postgres";
import {InferSelectModel, InferInsertModel} from 'drizzle-orm';


export const todoTable = pgTable("todos",{
    id: serial("id").primaryKey(),
    task: varchar("task",{ length: 255 }).notNull().default("abc task ")
})

//InferModel yahan model kii type koo generate karnay mainn help karta hai
export type Todo = InferSelectModel<typeof todoTable>;
export type  NewTodo = InferInsertModel<typeof todoTable>;

//drizzle koo nahi pata kayy hamaray database kayy credentials kya hainn 
//sql unnn koo read karay gaa aur drizzle koo dayy ga
//drizzle koo hmein aikk postgres kaa client pass karna paray gaa joo humm nayy kiya hai 
//yani drizzle khud aikk postfres client koo use karay gaa


////ORM koo DB kayy client kaa instace chahiye jis par voo opearte kar sakay 
export const db = drizzle(sql);

//abb iss orm client koo export kia hai auur iss koo use karein gay

db.insert(todoTable).values({
    task: "habibi"
})