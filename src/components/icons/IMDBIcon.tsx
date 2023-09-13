import Image from "next/image";
import IMDB from "../../../public/IMDB.png";

const IMDBIcon = () => {
  return <Image src={IMDB} alt="IMDB" priority />;
};

export default IMDBIcon;
