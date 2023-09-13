import Image from "next/image";
import TvShow from "../../../public/TVShow.png";

const IMDBIcon = () => {
  return <Image src={TvShow} alt="Tv show" priority />;
};

export default IMDBIcon;
