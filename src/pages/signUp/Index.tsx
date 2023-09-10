import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButtonFull from "../../Utils/buttons/PrimaryButtonFull";
import PrimaryInput from "../../Utils/inputs/PrimaryInput";
import LargeText from "../../Utils/texts/LargeText";
import usersData from "../../databases/userData";
import { EventType, FormEventType } from "../../types/globalTypes";

interface UserType {
  userUid: number | null;
  userName: string;
  email: string;
  password: string;
  profilePic: string;
  bio: string;
}

const SignUpPage = () => {
  const [value, setValue] = useState<UserType>({
    userUid: null,
    userName: "",
    email: "",
    password: "",
    profilePic: "",
    bio: "",
  });

  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      name: "userName",
      type: "text",
      placeholder: "User Name",
      label: "User Name",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      required: true,
    },
  ];

  const handleSubmit = (e: FormEventType) => {
    e.preventDefault();
    const lastUser = usersData[usersData.length - 1];
    const isHave = usersData?.find((user) => user?.email === value?.email);

    const formData = { ...value, userUid: lastUser?.userUid + 1 };
    if (isHave) {
      alert("Already have this user :) Try with another email");
    } else {
      usersData?.push(formData);
      navigate("/login");
    }
  };

  return (
    <main className="screenHeight flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="border-borderColor p-8 space-y-4 bg-white border rounded-md shadow-md"
      >
        <LargeText extraClass="text-center">Sign Up</LargeText>
        {inputs?.map(({ label, id, ...rest }) => (
          <label
            htmlFor=""
            key={id}
            className="flex flex-col gap-1 font-semibold"
          >
            {label}
            <PrimaryInput
              id={id}
              onChange={(e: EventType) =>
                setValue({ ...value, [e.target.name]: e.target.value })
              }
              {...rest}
            />
          </label>
        ))}
        <PrimaryButtonFull type="submit">Submit</PrimaryButtonFull>
      </form>
    </main>
  );
};

export default SignUpPage;
