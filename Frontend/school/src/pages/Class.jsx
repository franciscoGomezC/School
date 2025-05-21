import { Outlet, Link, useLocation } from "react-router-dom";
import { HasRole } from "../components/Auth/HasRole";

const Class = () => {

  const location = useLocation();
  return (
    <>
      <h2 className="section-title"> Class </h2>
      <nav className="minimal-nav">
        {/* Va a tener la clase de class item */}
        <Link className={`nav-item ${location.pathname === "/class" ? "active" : ""}`} to="/class"> Class List</Link>


        {HasRole("Teacher") && (<Link className={`nav-item ${location.pathname === "/class/create" ? "active" : ""}`} to="/class/create"> Create Class </Link>)}

      </nav>

      <Outlet />
    </>
  );
};

export default Class;
