"use client";
import Image from "next/image";
import React, { useState } from "react";
import DashboardTab from "./DashboardTab";

const Sidebar = () => {
  const [dashboardTabs, setDashboardTabs] = useState([
    { icon: "/assets/inbox.svg", title: "Inbox", number: 4 },
    { icon: "/assets/inbox.svg", title: "Inbox", number: 4 },
    { icon: "/assets/inbox.svg", title: "Inbox", number: 4 },
    { icon: "/assets/inbox.svg", title: "Inbox", number: 4 },
    { icon: "/assets/inbox.svg", title: "Inbox", number: 4 },
    { icon: "/assets/inbox.svg", title: "Inbox", number: 4 },
    { icon: "/assets/inbox.svg", title: "Inbox", number: 4 },
    { icon: "/assets/inbox.svg", title: "Inbox", number: 4 },
    { icon: "/assets/inbox.svg", title: "Inbox", number: 4 },
    { icon: "/assets/inbox.svg", title: "Inbox", number: 4 },
    { icon: "/assets/inbox.svg", title: "Inbox", number: 4 },
  ]);

  const [projectTabs, setProjectTabs] = useState([
    {icon: "/assets/tag.svg", title: "Additional Calendar", number: 6 },
    {icon: "/assets/tag.svg", title: "Additional Calendar", number: 6 },
    {icon: "/assets/tag.svg", title: "Additional Calendar", number: 6 },
    {icon: "/assets/tag.svg", title: "Additional Calendar", number: 6 },
    {icon: "/assets/tag.svg", title: "Additional Calendar", number: 6 },
  ]);

  return (
    <div className="overflow-y-scroll border-r-[1px] border-[#E9EBF0]">
      <div className="flex items-center justify-between border-b-[1px] border-[#E9EBF0] py-[30px] px-[32px]">
        <p className="text-xl font-semibold">Dashboard</p>
        <Image
          src="/assets/menu_open.png"
          alt="arrow"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>
      <div className="hidden px-[32px] lg:block">
        <div className="flex items-center justify-between border-b-[1px] border-[#E9EBF0] py-[30px] ">
          <div className="flex items-center gap-4">
            <Image
              src="/assets/avatar_1.png"
              alt="avatar"
              width={40}
              height={40}
              className="rounded-full p-[2px] ring-2 ring-[#3B82F6]"
            />
            <div className="flex flex-col gap-[2px]">
              <p className="text-[12px] font-semibold text-[#1F2633]">
                Nancy Martino
              </p>
              <p className="text-[11px] font-semibold text-[#B8BFCC]">
                Designer
              </p>
            </div>
          </div>
          <Image
            src="/assets/unfold_more.png"
            alt="unfold more"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div
        className="absolute z-10 flex w-full flex-col lg:static 
        invisible  opacity-0 duration-500 
        bg-[#F7F8FA] px-[32px] pb-[30px] transition-all lg:visible lg:w-full lg:opacity-100"
      >
        <div className="flex flex-col border-b-[1px] border-[#E9EBF0] py-[30px]">
          <div className="mb-[28px] flex items-center justify-between">
            <p className="text-[12px] font-semibold uppercase text-[#98A2B2]">
              DASHBOARDS
            </p>
            <Image
              src="/assets/expand_less.png"
              alt="icon"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-5">
            {dashboardTabs.map((tab) => (
              <DashboardTab key={tab} tab={tab} />
            ))}
          </div>
        </div>
        <div className="flex flex-col border-b-[1px] border-[#E9EBF0] py-[30px]">
        <div className="mb-[28px] flex items-center justify-between">
            <p className="text-[12px] font-semibold uppercase text-[#98A2B2]">
              PROJECTS
            </p>
            <Image
              src="/assets/expand_less.png"
              alt="icon"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-5">
            {projectTabs.map((tab) => (
              <DashboardTab key={tab} tab={tab} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
