import React, { useState, useEffect } from "react";
import Header from "./Header";
import { NewTodo } from "./NewTodo";
import TodoList from "./TodoList";
import { Banner } from "../components/Banner";
import { Accordion } from "../components/accordion";
import { TodoModal } from "modals";
import uuid from "react-uuid";
import { Content } from "./content";
import { useGetAllTestDataQuery } from "../components/api/testApi";
import { useDispatch } from "react-redux";
import { saveDetails } from "../../redux/reducerSlice/counterSlice";

export const Main = () => {
  const [todos, setTodos] = useState<TodoModal[]>([]);
  const { data } = useGetAllTestDataQuery(1);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) dispatch(saveDetails(data));
  });
  const todoHandler = (text: string) => {
    setTodos((prevTodos) => [...prevTodos, { id: uuid(), list: text }]);
  };

  const onClickDelete = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id !== id);
    });
  };
  return (
    <>
      <Header />
      <Banner />
      <Accordion />
      {/* <Content data={undefined} /> */}
      {/* <NewTodo onAddTodo={todoHandler} /> */}
      {/* <TodoList items={todos} onDelete={onClickDelete} /> */}
    </>
  );
};
