import Image from "next/image";
import TwoTicket from "../../../public/TwoTickets.png";

const TwoTicketIcon = () => {
  return <Image src={TwoTicket} alt="Two ticket" priority />;
};

export default TwoTicketIcon;
