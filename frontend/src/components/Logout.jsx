import toast from "react-hot-toast";
import { useAuth } from "../context/Authprovider";

function Logout() {
  const [, setAuthUser] = useAuth();

  const handleLogout = () => {

    localStorage.removeItem("user");


    setAuthUser(null);

   
    toast.success("Logout Successfully");
  };

  return (
    <div
      className="px-4 py-1.5 bg-red-500 rounded-md cursor-pointer"
      onClick={handleLogout}
    >
      Logout
    </div>
  );
}

export default Logout;
