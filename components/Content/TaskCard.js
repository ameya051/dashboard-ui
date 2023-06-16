"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const TaskCard = ({ product, status }) => {
  const { taskId, title, category, avatars, links, messages, tasks } = product;
  const [color, setColor] = useState("");
  useEffect(() => {
    function returnStatusColor(status) {
      if (status === "Backlog") setColor("#CA8A04");
      if (status === "To Do") setColor("#DB2777");
      if (status === "In Progress") setColor("#9333EA");
      if (status === "Done") setColor("#16A34A");
    }
    returnStatusColor(status);
  }, [status]);

  return (
    <div className="flex flex-col gap-3 rounded-lg bg-white p-[20px] drop-shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <p className="text-[12px] font-medium text-[#1F2633]">{title}</p>
        <div className="flex w-12 items-center justify-end gap-2">
          <Image
            src="/assets/task.svg"
            alt="task icon"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <p className="text-[10px] font-bold text-[#33BFFF]">{tasks}</p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <p className="rounded-full border-[1px] border-[#EBEEF2] px-[8px] py-[5px] text-[8px] font-bold">
          {taskId}
        </p>
        <p className="rounded-full bg-[#2563EB] bg-opacity-10 px-[8px] py-[5px] text-[8px] font-bold text-[#2563EB]">
          {category}
        </p>
        <p
          className={`rounded-full bg-opacity-10 px-[8px] py-[5px] text-[8px] font-bold text-[${color}] bg-[${color}]`}
        >
          {status}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-2">
          <div className="flex -space-x-3">
            {avatars.map((avatar) => (
              <Image
                key={avatar}
                src={avatar}
                alt="avatar"
                width={32}
                height={32}
              />
            ))}
          </div>
          <Image
            src="/assets/add_button.svg"
            alt="add button"
            width={32}
            height={32}
          />
        </div>
        <div className="flex items-center gap-1.5">
          <Image
            src="/assets/file_present.svg"
            alt="file present"
            width={20}
            height={20}
          />
          <p className="text-[10px] font-bold text-[#33BFFF]">{links}</p>
          <Image
            src="/assets/message.svg"
            alt="message"
            width={20}
            height={20}
          />
          <p className="text-[10px] font-bold text-[#33BFFF]">{messages}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
