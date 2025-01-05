import './index.css';

export default function Header() {
  return (
    <div className="headerContainer">
      <img src="./todo.png" alt="logo" id="todoLogo" />
      <h1 id="greeter">Welcome To My To-Do List</h1>
    </div>
  );
}
