
import {BrowserRouter,Routes,Route } from "react-router-dom";
import Admin from "./Admin";
// import GamesForm from"./GamesForm.jsx"

function App() {
  return (
   <BrowserRouter>
    < Routes>
      <Route path="/" element = {<Admin/>} />
      {/* <Route path="/Admin/Add" element = {<GamesForm/>} /> */}
      
    </Routes >
   </BrowserRouter>
  );
}

export default App;
