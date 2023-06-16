import Image from "next/image";
import React from "react";

const ContentNav = () => {
  return (
    <div className="hidden items-center justify-between border-b-[1px] border-[#E9EBF0] px-[36px] py-[21px] xl:flex">
      <div className="flex gap-[32px]">
        <div className="flex min-w-[200px] justify-between rounded-md border-[1px] border-[#EBEEF2] bg-white p-[12px] drop-shadow-sm">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/search.png"
              alt="search icon"
              width={20}
              height={20}
            />
            <p className="cursor-pointer text-[12px] font-semibold text-[#98A2B2]">
              Search Tasks
            </p>
          </div>
          <Image
            src="/assets/input.png"
            alt="input icon"
            width={20}
            height={20}
          />
        </div>
        <Image
          src="/assets/keyboard_voice.svg"
          alt="keyboard voice"
          width={20}
          height={20}
        />
      </div>
      <div className="flex gap-[32px]">
        <p className="text-[11px] font-semibold text-black cursor-pointer">
          Dashboard
        </p>
        <p className="text-[11px] font-semibold text-[#7A8699] cursor-pointer">
          My Tasks
        </p>
        <p className="text-[11px] font-semibold text-[#7A8699] cursor-pointer">
          Reporting
        </p>
        <p className="text-[11px] font-semibold text-[#7A8699] cursor-pointer">
          Portfolios
        </p>
        <p className="text-[11px] font-semibold text-[#7A8699] cursor-pointer">
          Goals
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Image
          src="/assets/folder_open.svg"
          alt="folder open"
          width={20}
          height={20}
        />
        <Image
          src="/assets/notifications_none.svg"
          alt="notif none"
          width={20}
          height={20}
        />
        <div className="relative">
          <Image
            src="/assets/avatar_2.png"
            alt="avatar"
            width={30}
            height={30}
          />
          <span className="absolute -top-1 left-4 rounded-full bg-red-500 px-[6px] py-[2px] text-[10px] font-bold text-white">
            2
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContentNav;
