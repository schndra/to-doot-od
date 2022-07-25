import styled from "styled-components";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";
import axios from "axios";

const Wrapper = styled.section`
  h3 {
    text-align: center;
  }

  .todo {
    border-radius: 3rem;
    padding: 1rem;
    border: transparent;
    width: 100%;
    height: 3rem;
    margin: 0 auto;
    text-align: left;
    text-transform: capitalize;
  }
  .btn {
    display: block;
    margin: 0.5rem auto;

    height: 2rem;
  }
  .btn-clear {
    width: 95%;
    display: block;
    margin: 0 auto;
  }
`;

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  useEffect(() => {
    getAllTodo();
  }, []);

  const addTodo = async (newList) => {
    try {
      await axios.post("http://localhost:5000/api/v1/todo", newList);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllTodo = async () => {
    try {
      const newList = await axios.get("http://localhost:5000/api/v1/todo");
      setList(newList.data.todo);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // display alert
    } else if (name && isEditing) {
      // deal with editing
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
    } else {
      const id = uuidv4();
      const newList = { id, title: name };
      setList([...list, newList]);
      setName("");
      addTodo(newList);
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const clearList = () => {
    //show alert
    setList([]);
  };

  const removeTodo = (id) => {
    // display alert
    setList(list.filter((item) => item.id !== id));
  };

  const editTodo = (id) => {
    // display alert
    const relavantItem = list.find((item) => item.id === id);

    setIsEditing(true);
    setEditID(id);
    setName(relavantItem.title);
  };

  return (
    <Wrapper className="container">
      <h3>ToDo</h3>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="todo"
            value={name}
            onChange={handleChange}
            className="todo"
            placeholder={`${isEditing === false ? "add toDo" : "edit ToDo"}`}
          />
          <button className="btn">
            {isEditing === false ? "add toDo" : "edit ToDo"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div>
          <TodoList items={list} removeTodo={removeTodo} editTodo={editTodo} />
          <button
            type="button"
            className="btn btn-clear btn-hipster"
            onClick={clearList}
          >
            clear list
          </button>
        </div>
      )}
    </Wrapper>
  );
}

export default App;
