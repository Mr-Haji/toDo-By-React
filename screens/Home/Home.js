import "../../App.css";
import React, { useState } from "react";
import InputTodoAdd from "../../componants/Input/Input";
import CustomButton from "../../componants/Button/Button";
import ListMap from "../../componants/ListMap/ListMap";


const Home = () => {
  // todoApp
  let todoData = [];
  const [todo, setTodo] = useState(todoData);
  const [inputValue, setInputValue] = useState("");
  const [InputEmpty, setInputEmpty] = useState("");
  // add todo
  const addTodo = () => {
    setInputEmpty("");
    !inputValue
      ? setInputEmpty("please enter todo")
      : setTodo([
        ...todo,
        {
          id: Math.random().toString(16).slice(2),
          todo: inputValue,
        },
      ]);
    setInputValue("");
  };
  // delete
  const delTodo = (id) => {
    setTodo(
      todo.toSpliced(
        todo.findIndex((t) => t.id === id),
        1
      )
    );
  };
  // edit todo
  const editTodo = (id, prevTodo) => {
    let update = prompt("update value");

    !update
      ? setTodo(
        todo.toSpliced(
          todo.findIndex((t) => t.id === id),
          1,
          {
            id: id,
            todo: prevTodo,
          }
        )
      )
      : setTodo(
        todo.toSpliced(
          todo.findIndex((t) => t.id === id),
          1,
          {
            id: id,
            todo: update,
          }
        )
      );
  };
  // delete all
  const dellAll = () => {
    setTodo([]);
  };

  // on change handler

  return (<>
    < CustomButton onClick={dellAll} label={"Delete All"} variant={"outlined"} />
    <InputTodoAdd
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
    <CustomButton onClick={addTodo} label={"add"} />
    <ListMap todo={todo} delBtn={delTodo} editBtn={editTodo} />
  </>
  );
};

export default Home;
