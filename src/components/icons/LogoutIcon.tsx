import Image from "next/image";
import Logout from "../../../public/Logout.png";

const LogoutIcon = () => {
  return <Image src={Logout} alt="log out icon" priority />;
};

export default LogoutIcon;
