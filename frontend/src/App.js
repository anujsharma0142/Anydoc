// import logo from './logo.svg';
import './App.css';
import Dashboard from "./components/Dashboard";
import Sidebar from './components/Sidebar';
import "./scss/style.css";
function App() {
  return (
    <div className="app">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
