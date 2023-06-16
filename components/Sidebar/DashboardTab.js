import Image from "next/image";
import React from "react";

const DashboardTab = ({tab}) => {
  const { icon, title, number } = tab;
  return (
    <div className="flex cursor-pointer items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Image src={icon} alt="icon" width={20} height={20} />
        <p className="text-[12px] font-medium">{title}</p>
      </div>
      <p className="text-[10px] font-extrabold text-[#2563EB] rounded-full bg-[#3B82F6]/10 px-[8px] py-[4px]">
        {number}
      </p>
    </div>
  );
};

export default DashboardTab;
