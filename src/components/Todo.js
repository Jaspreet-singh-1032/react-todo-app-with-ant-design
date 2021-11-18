import React, { useState } from "react";
import { Input } from "antd";
// import { PlusCircleOutlined } from "@ant-design/icons";
import ItemsList from "./ItemsList";

const Todo = () => {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState([]);
  const enterPressed = (e) => {
    if (name) {
      setTodos([...todos, { id: new Date().getTime().toString(), name }]);
      setName("");
    }
  };
  return (
    <div className="main">
      <h1>Things To Do</h1>
      <div className="add-item">
        <Input
          placeholder="Add new"
          onChange={(e) => setName(e.target.value)}
          value={name}
          onPressEnter={enterPressed}
        />
      </div>
      <div className="items-list">
        <ItemsList items={todos} />
      </div>
    </div>
  );
};

export default Todo;
