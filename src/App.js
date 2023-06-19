import "./App.css";
import React from "react";
function Goalform(props) {
  const [formData, setFormData] = React.useState({ goal: "", by: "" });

  function changeHandle(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function submitHandle(e) {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ goal: "", by: "" });
  }

  return (
    <>
      <h1>My Diet Goals</h1>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          name="goal"
          placeholder="goal"
          value={formData.goal}
          onChange={changeHandle}
        />
        <input
          type="text"
          name="by"
          placeholder="By..."
          value={formData.by}
          onChange={changeHandle}
        />
        <button>Submit Data</button>
      </form>
    </>
  );
}

function ListofGoal(props) {
  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>
            My goal is to {g.goal}, by {g.by}
          </span>
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [allGoals, updateAllGoal] = React.useState([]);
  function addGoal(goal) {
    updateAllGoal([...allGoals, goal]);
  }

  return (
    <div>
      <Goalform onAdd={addGoal} />
      <ListofGoal allGoals ={allGoals}/>
    </div>
  );
}

export default App;
