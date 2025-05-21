{/* Componente que se encarga de renderizar la lista de Cursos y el formulario para crear un curso */}
import { Outlet, Link, useLocation } from "react-router-dom";
import './Course.css'; //importamos el css del componente
import { HasRole } from "../components/Auth/HasRole";

const Course = () => {

  const location = useLocation();
  return (
    <div className="course-component">
      <h2 className="section-title"> Courses </h2>
      <nav className="minimal-nav">
        {/* Va a tener la clase de class item */}
        <Link className={`nav-item ${location.pathname === "/course" ? "active" : ""}`} to="/course"> Courses List </Link>


        {HasRole("Teacher") && (<Link className={`nav-item ${location.pathname === "/course/create" ? "active" : ""}`} to="/course/create"> Create Courses </Link>)}

      </nav>

      {/* //el outlet es un componente que se encarga de renderizar los componentes hijos */}
      {/* en este caso los componentes hijos son Course */}

      <Outlet />
    </div>
  );
};

export default Course;
