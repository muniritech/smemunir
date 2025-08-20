import { BrowserRouter as Router } from "react-router-dom";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import { Button } from "./components/ui/button";
// import NavBar from "./appComponents/NavBar";
// import MiddleContainer from "./appComponents/MiddleContainer";
import AppRouter from "./routing/AppRouter";

function App() {

  return (
    <>
      <Router>
        <div className="flex flex-1 w-full h-[100vh] overflow-hidden">
          <AppRouter />
        </div>
      </Router>
    </>
  );
}

export default App;
