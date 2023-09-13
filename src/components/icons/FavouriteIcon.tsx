import React from "react";
import Image from "next/image";
import Favorite from "../../../public/Favorite.png";

const FavouriteIcon = () => {
  return <Image src={Favorite} alt="" priority />;
};

export default FavouriteIcon;
