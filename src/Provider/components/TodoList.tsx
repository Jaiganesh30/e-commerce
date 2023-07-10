import React, { useEffect } from "react";
import { Link } from "react-router-dom";


interface TodoProps {
  items: { id: string; list: string }[];
  onDelete: (id: string) => void;
}
const TodoList: React.FC<TodoProps> = (props) => {

  console.log(props);
  return (
    <ul>
      <Link to="/content">Content Page</Link>
      {props.items.map((item) => (
        <>
          <li key={item?.id}>{item.list}</li>
          <button onClick={props.onDelete.bind(null, item.id)}>Delete</button>
        </>
      ))}
    </ul>
  );
};

export default TodoList;
