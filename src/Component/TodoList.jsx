import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const localItem = () => {
  let listed = localStorage.getItem("list");
  if (listed) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

export default function Todolist() {
  const [text, setText] = useState();
  const [toggle, setToggle] = useState(true);
  const [task, setTask] = useState(localItem());
  const [edit, setEdit] = useState(null);

  // edit the element
  const edithandler = (id) => {
    let newitem = task.find((el) => {
      return el.id === id;
    });
    setToggle(false);
    setText(newitem.name);
    setEdit(id);
  };

  // local storage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(task));
  }, [task]);

  // delete
  const removehandler = (e) => {
    const data = task.filter((value) => {
      return value.id !== e;
    });
    setTask(data);
  };
  // saving input value
  const SaveText = (e) => {
    setText(e.target.value);
  };

  // saving input value into task array
  const submithandler = (e) => {
    e.preventDefault();
    if (text && !toggle) {
      setTask(
        task.map((el) => {
          if (el.id === edit) {
            return { ...el, name: text };
          }
          return el;
        })
      );
      setToggle(true);
      setText("");
      setEdit(null);
    } else {
      const inputdata = { id: new Date().getTime().toString(), name: text };
      setTask([...task, inputdata]);
      setText("");
    }
  };
  return (
    <div>
      <h3> To-do List</h3>

      <form onSubmit={submithandler}>
        <input
          type="text"
          placeholder="enter"
          value={text}
          onChange={SaveText}
        />

        {toggle ? <button type="submit">Add</button> : <button>edit</button>}
      </form>
      <div>
        {task.map((el) => {
          return (
            <div>
              <br />
              <div key={el.id}>
                {el.name}
                <button onClick={() => removehandler(el.id)}>Sub</button>
                <button onClick={() => edithandler(el.id)}>edit</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
