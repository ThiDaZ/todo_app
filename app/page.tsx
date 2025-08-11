"use client";
import AddTodoCard from "@/components/add-todo-card";
import Navbar from "@/components/navbar";
import TodoCard from "@/components/todo-card";
import { exampleTodos } from "@/lib/example-data";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState(exampleTodos);

	const addCard = () => {
		setTodos([ 
      ...todos,
      { icon: "😊", title: "New Todo" },
		]);
	};

	return (
		<div className="flex flex-col w-full">
			<Navbar />
			<div className="flex flex-col p-4 w-full max-w-6xl mx-auto">
				<div className="text-center">
					This is Home
				</div>
				<div className="mt-4 grid grid-cols-4 gap-5">
					<AddTodoCard addCard={addCard} />

					{todos.map((todo, index) => (
						<TodoCard
							key={index}
							icon={todo.icon}
							title={todo.title}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

