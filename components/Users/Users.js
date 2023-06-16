import Image from "next/image";
import React from "react";

const Users = () => {
  return (
    <div className="hidden min-h-full lg:block">
      <div className="flex min-h-full flex-col">
        <div className="border-b-[1px] border-l-[1px] border-[#E9EBF0] p-[33px]">
          <Image
            src="/assets/close.svg"
            alt="close"
            className="cursor-pointer"
            width={21}
            height={21}
          />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-3 border-l-[1px] border-[#E9EBF0]"></div>
        <div className="border-y-[1px] border-l-[1px] border-[#E9EBF0] p-[33px]">
          <Image
            src="/assets/arrow_forward.svg"
            alt="arrow forward"
            width={21}
            height={21}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Users;
