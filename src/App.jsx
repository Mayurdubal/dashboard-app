import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import DashboardMainContent from "./components/DashboardMainContent/DashboardMainContent";
import "./styles/global.css";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;
