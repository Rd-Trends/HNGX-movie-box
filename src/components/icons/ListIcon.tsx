import Image from "next/image";
import List from "../../../public/List.png";

const ListIcon = () => {
  return <Image src={List} alt="list icon" priority />;
};

export default ListIcon;
