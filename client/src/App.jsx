import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { vision } from "./assets/index.js";
import {Home,CreatePost} from "./pages/index.js"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <header className=" w-full items-center justify-between flex bg-red-500 sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
          <Link to={"/"}>
            <img src={vision} alt="logo" className=" w-28 object-contain" />
          </Link>
          
          <Link
            to={"/create-post"}
            className=" font-medium font-inter text-sm bg-blue-500 p-4 text-white rounded-2xl hover:bg-blue-900"
          >
            Create Image{" "}
          </Link>
        </header>
        <main className=" sm:p-8 px-4 py-8 w-full min-h-[calc(100vh-73px)]">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create-post' element={<CreatePost/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
