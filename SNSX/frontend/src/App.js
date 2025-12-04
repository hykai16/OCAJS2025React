import Profile from "./components/profile/Profile";
import Timeline from "./components/timeline/Timeline";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
    return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          {/* ルーティングによって表示される子要素を決定*/}
          <Route element={<Home/>}>
            <Route path = "/" element = {<Timeline/>}/>
            <Route path = "/profile/:userId" element = {<Profile/>}/>
          </Route>
          
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
