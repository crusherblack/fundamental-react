import { useState, useRef } from "react";

import Form from "../components/todo/Form";
import List from "../components/todo/List";

const Todo = () => {
  const nameInputRef = useRef();
  const [todos, setTodos] = useState([
    {
      id: 1,
      nama: "Belajar React.js",
      status: "false",
    },
    {
      id: 2,
      nama: "Membuat aplikasi Todo",
      status: "true",
    },
  ]);

  const [formData, setFormData] = useState({
    nama: "",
    status: false,
  });

  const [isEdit, setIsEdit] = useState(false);

  const addTodo = (nama, status) => {
    const newTodo = {
      id: Math.random() * 1000,
      nama,
      status,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const getTodo = (id) => {
    nameInputRef.current.focus();
    const todoById = todos.find((todo) => todo.id === id);
    setFormData(todoById);
    setIsEdit(true);
  };

  const updateTodo = () => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === formData.id ? formData : todo))
    );
    setIsEdit(false);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  console.log(formData);

  return (
    <div className="container">
      <h1 className="text-center mt-3">Aplikasi Todo</h1>
      <Form
        nameInputRef={nameInputRef}
        isEdit={isEdit}
        addTodo={addTodo}
        updateTodo={updateTodo}
        formDataState={{ formData, setFormData }}
      />
      <List todos={todos} getTodo={getTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Todo;
