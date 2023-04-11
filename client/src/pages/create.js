 import React, { useState } from "react";

function ProjectForm() {
  const [name, setName] = useState("");
  const [members, setMembers] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const project = {
      name,
      members,
      dueDate,
      priority,
      notes,
    };
    console.log(project);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name of the project:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Group members:
        <input
          type="text"
          value={members}
          onChange={(e) => setMembers(e.target.value)}
        />
      </label>
      <br />
      <label>
        Desired due date:
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </label>
      <br />
      <label>
        Priority:
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="">--Select--</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </label>
      <br />
      <label>
        Notes:
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
      </label>
      <br />
      <button type="submit">Create</button>
    </form>
  );
}


// havent added the tailwind yet. next on the to-do list!