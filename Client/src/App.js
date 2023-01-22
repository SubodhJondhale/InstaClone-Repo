//Run this command in terminal in root folder before starting app -:"npx json-server --watch Mock-data/data.json --port 3004"
//run this command to insatll react router "npm install react-router-dom"
import "./App.css";
import Loding from "./loading";
import Postview from "./postview1";
import Form from "./userData";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loding />} />
          <Route path='posts' element={<Postview />} />
          <Route path='userData' element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
