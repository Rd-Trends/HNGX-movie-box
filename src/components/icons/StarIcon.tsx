import Image from "next/image";
import Star from "../../../public/Star.png";

const StarIcon = () => {
  return <Image src={Star} alt="star icon" priority />;
};

export default StarIcon;
