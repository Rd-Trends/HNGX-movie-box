import Image from "next/image";
import RottenTomatoes from "../../../public/RottenTamotoes.png";

const RottenTomatoesIcon = () => {
  return <Image src={RottenTomatoes} alt="RottenTomatoes" priority />;
};

export default RottenTomatoesIcon;
