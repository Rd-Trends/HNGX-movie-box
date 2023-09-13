import Image from "next/image";
import Calendar from "../../../public/Calendar.png";

const CalendarIcon = () => {
  return <Image src={Calendar} alt="calendar" priority />;
};

export default CalendarIcon;
