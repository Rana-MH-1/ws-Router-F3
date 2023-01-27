import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import UserLists from "./Pages/UserLists";

function App() {
  const Users = [
    {id:1, name: "Firas", age: 24,Adress:'Testour' },
    {id:2, name: "Ameni", age: 26,Adress:'Sidi-bouzid' },
    {id:3, name: "Mohamed", age: 12,Adress:'Tunis' },
  ];
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Profile/:idUser" element={<Profile Users={Users} />} />
        <Route path="/users" element={<UserLists Users={Users} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
