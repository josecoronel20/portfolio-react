import { Route,Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/navbarComponent/NavBar";
import Home from "./routes/Home";
import Technologies from "./routes/Technologies"
import ContactMe from "./routes/ContactMe"
import AboutMe from "./routes/AboutMe"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/technologies" element={<Technologies />} />
        <Route exact path="/contactMe" element={<ContactMe />} />
        <Route exact path="/aboutMe" element={<AboutMe />} />
      </Routes>
      <NavBar />
    </BrowserRouter>
  )
}

export default App;
