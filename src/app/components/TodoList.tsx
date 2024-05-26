import { Todo } from "@/lib/drizzle";
import { cookies } from "next/headers";
import React from "react";

type Props = {};

const TodoList = async (props: Props) => {
  cookies();
  const todosResp = await fetch("http://localhost:3000/api/todo", {
    cache: "no-store",
  });
  const todos: Todo[] = (await todosResp.json()).data;
  //   ,{
  //   cache: "force-cache"
  // }
  // )
  // .then((res) => res.json())
  // .then(data => setData(data))
  // if (loading) {
  //   return <p>Loading...</p>;
  // }
  console.log({ todos });
  return (
    <div className="max-h-[350px] overflow-y-scroll scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-secondary scrollbar-track-primary">
      {todos.map((todo) => {
        return (
          <div
            className="bg-gray-100 py-2 px-2 rounded-lg flex shadow items-center gap-x-3 my-3"
            key={`todo-${todo.id}`}
          >
            {/* Circle */}
            <div className="h-3 w-3 rounded-full bg-secondary "></div>
            {/* Task Title */}
            <p className="text-lg">{todo.task}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
