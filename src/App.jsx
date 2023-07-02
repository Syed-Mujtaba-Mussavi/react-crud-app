import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./assets/components/pages/Home";
import About from "./assets/components/pages/About";
import Contact from "./assets/components/pages/Contact";
import Navbar from "./assets/components/layouts/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./assets/components/pages/NotFound";
import AddUser from "./assets/components/users/AddUser";
import EditUser from "./assets/components/users/EditUser";
import User from "./assets/components/users/User";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/contact" Component={Contact} />
          <Route exact path="/users/add" Component={AddUser} />
          <Route exact path="/users/edit/:id" Component={EditUser} />
          <Route exact path="/users/:id" Component={User} />
          <Route Component={NotFound} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
