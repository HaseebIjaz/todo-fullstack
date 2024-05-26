import Image from "next/image";
import TodoList from "./components/TodoList";
import { Suspense } from "react";
import AddTodo from "./components/AddTodo";

export default function Home() {
  return (
    <main className="bg-gradient-to-tr from-primary to-secondary h-screen flex flex-row justify-center items-center">
      <div className="px-3 py-4 rounded-xl bg-white w-full max-w-sm">
        {/* <Suspense fallback={<p>Loadddddddd........</p>}> */}
          <TodoList />
          <AddTodo/>
        {/* </Suspense> */}
        <div className="bg-black/70 w-1/4 h-1.5 rounded mx-auto mt-4"></div>
      </div>
    </main>
  );
}
