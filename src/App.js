import './App.css';
import '@fontsource/roboto';
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="Content">
          Some Body Content
      </div>
    </div>
  );
}

export default App;
