import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const localItem = () => {
  let listed = localStorage.getItem("lists");
  if (listed) {
    return JSON.parse(listed);
  } else {
    return [];
  }
};

export default function Todolist() {
  const [text, setText] = useState(localItem());
  const [task, setTask] = useState([]);

  // local storage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(task));
  }, [task]);

  // delete
  const removehandler = (e) => {
    const data = task.filter((value, index) => {
      return index !== e;
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
    setTask([...task, text]);
    setText("");
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

        <button type="submit">Add</button>
      </form>
      <div>
        {task.map((el, id) => {
          return (
            <div>
              <br />
              <div key={id}>
                {el}
                <button onClick={() => removehandler(id)}>Sub</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
