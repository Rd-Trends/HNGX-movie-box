import Loader from "@/components/Loader";
import Logo from "@/components/Logo";
import React from "react";

const Loading = () => {
  return (
    <div className=" h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <Logo color="text-black" />
      <Loader />
    </div>
  );
};

export default Loading;
