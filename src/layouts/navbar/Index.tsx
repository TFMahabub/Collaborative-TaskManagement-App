import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileImage from "../../../public/ProfileImage.png";
import PrimaryButton from "../../Utils/buttons/PrimaryButton";
import { UsersProvider } from "../../contexts/usersContext";

const Navbar = () => {
  const { userData, setUserData } = useContext(UsersProvider);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserData({
      userUid: null,
      userName: "",
      email: "",
      password: "",
      profilePic: "",
      bio: "",
    });
  };

  return (
    <nav className="border-borderColor h-navbarHeight flex items-center justify-center bg-white border-b">
      <section className="container flex items-center justify-between">
        <h1
          className="text-primary text-xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          CTMA
        </h1>
        <ul className="flex items-center gap-6 cursor-pointer">
          {userData?.userUid ? (
            <>
              <li>
                <PrimaryButton onClick={handleLogout}>Log Out</PrimaryButton>
              </li>
              <li
                onClick={() => {
                  navigate("/user_profile");
                }}
                className="border-borderColor w-10 h-10 overflow-hidden border rounded-full"
              >
                {userData?.profilePic ? (
                  <img src={userData?.profilePic} alt="profile pic" />
                ) : (
                  <img src={ProfileImage} alt="profile pic" />
                )}
              </li>
            </>
          ) : (
            <>
              <li className="hover:text-primary text-base font-medium duration-200">
                <Link to={"/sign_up"}>Sign Up</Link>
              </li>
              <li className="hover:text-primary text-base font-medium duration-200">
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
