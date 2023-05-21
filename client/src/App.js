import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

// import Books from "./components/Book"
// import Add from "./components/Add"
// import Update from "./components/Update"

import Login from "./components/Login"
import Register from "./components/Register"


function App() {
  return (
    <div className="App">

        <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Login/>}></Route>
              <Route exact path="/register" element={<Register/>}></Route>
              {/* <Route path="/" element={<Books/>} />
              <Route path="/add" element={<Add/>} />
              <Route path="/update/:id" element={<Update/>} /> */}
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
