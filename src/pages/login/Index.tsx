import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButtonFull from "../../Utils/buttons/PrimaryButtonFull";
import PrimaryInput from "../../Utils/inputs/PrimaryInput";
import LargeText from "../../Utils/texts/LargeText";
import { UsersProvider } from "../../contexts/usersContext";
import usersData from "../../databases/userData";
import { EventType, FormEventType } from "../../types/globalTypes";

const UserLoginPage = () => {
  const { setUserData } = useContext(UsersProvider);
  const [value, setValue] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      required: true,
    },
  ];

  const handleSubmit = (e: FormEventType) => {
    e.preventDefault();
    const isHave = usersData?.find(
      (user) =>
        user?.email === value?.email && user?.password === value?.password
    );

    if (isHave) {
      setUserData!(isHave);
      navigate("/");
    } else {
      alert("something went wrong try again");
    }
  };
  return (
    <main className="screenHeight flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="border-borderColor p-8 space-y-4 bg-white border rounded-md shadow-md"
      >
        <LargeText extraClass="text-center">Login</LargeText>
        {inputs?.map(({ label, id, ...rest }) => (
          <label
            htmlFor=""
            key={id}
            className="flex flex-col gap-1 font-semibold"
          >
            {label}
            <PrimaryInput
              onChange={(e: EventType) =>
                setValue({ ...value, [e.target.name]: e.target.value })
              }
              id={id}
              {...rest}
            />
          </label>
        ))}
        <PrimaryButtonFull type="submit">Submit</PrimaryButtonFull>
      </form>
    </main>
  );
};

export default UserLoginPage;
