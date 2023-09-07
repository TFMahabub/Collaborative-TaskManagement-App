import { Link } from "react-router-dom";
import PrimaryButton from "../../buttons/primary/Index";

const Navbar = () => {
  const user = true;
  return (
    <nav className="border-b border-borderColor flex items-center justify-center h-navbarHeight">
      <section className="container flex items-center justify-between">
        <h1 className="text-xl font-semibold text-primary">
          Collaborative Task Management App
        </h1>
        <ul className="flex items-center gap-6">
          <li className="text-base font-medium hover:text-primary duration-200">
            <Link to={"/home"}>Home</Link>
          </li>
          {user ? (
            <li>
              <PrimaryButton>Log Out</PrimaryButton>
            </li>
          ) : (
            <>
              <li className="text-base font-medium hover:text-primary duration-200">
                <Link to={"/registration"}>Sign Up</Link>
              </li>
              <li className="text-base font-medium hover:text-primary duration-200">
                <Link to={"/login"}>Login</Link>
              </li>
            </>
          )}
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
