import React, { useState } from "react";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [name, setName] = useState({
    fname: "",
    lname: "",
  });
  // When I control the form elements using a state -> controlled component

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div>
      <input type="text" name="text" value={task} onChange={handleTask} />
      <button onClick={addTask}>add task</button>
      {/* Always key should be unique */}
      {tasks.map((task, index) => (
        <h2 key={index}>{task}</h2>
      ))}
      <br />
      <input
        type="text"
        name="fname"
        value={name.fname}
        onChange={(e) => setName({ ...name, fname: e.target.value })}
      />
      <br />
      <input
        type="text"
        name="lname"
        value={name.lname}
        onChange={(e) => setName({ ...name, lname: e.target.value })}
      />

      <h1>{JSON.stringify(name)}</h1>
    </div>
  );
}

export default TaskManager;
