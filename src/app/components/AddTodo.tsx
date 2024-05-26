"use client";
import { NewTodo } from "@/lib/drizzle";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {};

const AddTodo =  (props: Props) => {
    const [task, setTask] = useState<NewTodo| null>(null);
    const {refresh} = useRouter()
    const handleAddToDo = async () => {
        try {
            if(task){
                const res = await fetch("/api/todo",{
                    method: "POST",
                    body: JSON.stringify({
                        task:task.task
                    })
                });
                console.log(res.ok);
                refresh();
            }
        } catch (error) {
            console.log({error})
        }
    }
  return (
    <div className="flex gap-x-2 w-full items-center">
      <input
        type="text"
        placeholder="Type Todo"
        className="rounded-full w-full py-3 px-5  border focus:outline-primary "
        onChange={(e) => setTask({task: e.target.value})}
      />
      <button className="bg-secondary w-10 h-10 rounded-full text-white text-center font-bold shrink-0" onClick={handleAddToDo}>
        +
      </button>
    </div>
  );
};

export default AddTodo;
