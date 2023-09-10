import { useContext } from "react";
import ProfileImage from "../../../public/ProfileImage.png";
import { UsersProvider } from "../../contexts/usersContext";

const UserProfilePage = () => {
  const { userData } = useContext(UsersProvider);
  return (
    <main>
      <section className="mt-sectionGap container">
        <div className="flex flex-col items-center justify-center max-w-3xl gap-3 p-8 mx-auto bg-white">
          <div className="w-40 h-40 overflow-hidden rounded-full">
            {userData?.profilePic ? (
              <img src={userData?.profilePic} alt="profile pic" />
            ) : (
              <img src={ProfileImage} alt="profile pic" />
            )}
          </div>
          <article className="flex flex-col items-center justify-center">
            <h1 className="text-textColor text-2xl font-semibold">
              {userData?.userName}
            </h1>
            <p className="text-textColor/70">{userData?.bio}</p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default UserProfilePage;
