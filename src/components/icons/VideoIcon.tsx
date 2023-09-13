import Image from "next/image";
import Video from "../../../public/MovieProjector.png";

const VideoIcon = () => {
  return <Image src={Video} alt="Movie projector" priority />;
};

export default VideoIcon;
