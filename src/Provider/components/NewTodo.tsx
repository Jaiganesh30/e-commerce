import React, { useRef, useState } from "react";

type newAddTodo = {
  onAddTodo: (text: string) => void;
};

export const NewTodo: React.FC<newAddTodo> = (props) => {
  const todoValue = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onAddTodo(todoValue.current!.value);
  };

  return (
    <form onSubmit={handleSubmit} className="form-control">
      <label style={{ width: "100vh", height: "100vh" }}>
        Name
        <input type="text" ref={todoValue} />
      </label>
      <button type="submit" className="btn-priamry">Sumbit</button>
    </form>
  );
};
