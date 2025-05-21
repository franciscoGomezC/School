import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Class from "./pages/Class";
import Course from "./pages/Course";

import CourseCreate from "./components/Course/CourseCreate";
import CourseEdit from "./components/Course/CourseEdit";
import CourseList from "./components/Course/CourseList";

import ClassCreate from "./components/Class/ClassCreate";
import ClassEdit from "./components/Class/ClassEdit";
import ClassList from "./components/Class/ClassList";

import PrivateRoute from "./components/Auth/PrivateRoute";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "./components/Layout/Layout";
import "./components/Layout/Layout.css";
import Unauthorized from "./components/Auth/Unauthorized";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>

      <Routes>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Unauthorized" element={<Unauthorized />} />

        
          <Route element={<PrivateRoute roles={['Admin','Teacher','User','Student']}/>}>

          <Route path="/" element={<Layout />}>

            <Route index element={<Home />} />
            
            <Route path="course" element={<Course />}>

              <Route index element={<CourseList />} />

              <Route path="create" element={<CourseCreate />} />
              
              <Route path="edit/:id" element={<CourseEdit />} />

            </Route>
            
            <Route path="class" element={<Class />}>

              <Route index element={<ClassList />} />

              <Route path="create" element={<ClassCreate />} />

              <Route path="edit/:id" element={<ClassEdit />} />

            </Route>

          </Route>

          </Route>

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
