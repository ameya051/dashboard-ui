import Image from "next/image";
import React from "react";

const Avatar = ({ avatar }) => {
  const { image, active, notif } = avatar;
  return (
    <div className="relative">
      <Image src={image} alt="avatar" width={35} height={35} />
      {notif && (
        <span className="absolute -top-2 left-6 rounded-full bg-red-500 px-[6px] py-[2px] text-[10px] font-bold text-white">
          {notif}
        </span>
      )}
      {active && (
        <span className="absolute bottom-0 left-6 h-3.5 w-3.5 bg-green-500 rounded-full border-2 border-white" />
      )}
    </div>
  );
};

export default Avatar;
