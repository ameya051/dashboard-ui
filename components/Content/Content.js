"use client";
import Image from "next/image";
import React, { useState } from "react";
import ContentNav from "./ContentNav";
import TaskCard from "./TaskCard";
import AddButton from "./AddButton";

const Content = () => {
  const [backlogTasks, setBacklogTasks] = useState([
    {
      id: 1,
      taskId: "#UI007",
      title: "Model Answer",
      category: "Design",
      avatars: ["/assets/avatar_6.svg", "/assets/avatar_7.svg"],
      links: 1,
      messages: 1,
      tasks: 1,
    },
    {
      id: 2,
      taskId: "#BC004",
      title: "Create calendar, app and chat messages",
      category: "Development",
      avatars: ["/assets/avatar_6.svg", "/assets/avatar_7.svg"],
      links: 1,
      messages: 1,
      tasks: 1,
    },
    {
      id: 3,
      taskId: "#FT065",
      title: "Create calendar, app and chat messages",
      category: "Design",
      avatars: ["/assets/avatar_6.svg", "/assets/avatar_7.svg"],
      links: 1,
      messages: 1,
      tasks: 1,
    },
    {
      id: 4,
      taskId: "#002",
      title: "Create calendar, app and chat messages",
      category: "Development",
      avatars: ["/assets/avatar_6.svg", "/assets/avatar_7.svg"],
      links: 1,
      messages: 1,
      tasks: 1,
    },
    {
      id: 5,
      taskId: "#002",
      title: "Create calendar, app and chat messages",
      category: "Development",
      avatars: ["/assets/avatar_6.svg", "/assets/avatar_7.svg"],
      links: 1,
      messages: 1,
      tasks: 1,
    }
  ]);
  const [todoTasks, setTodoTasks] = useState([
    {
      id: 1,
      taskId: "#002",
      title: "Create calendar, app and chat messages",
      category: "Project",
      avatars: ["/assets/avatar_6.svg", "/assets/avatar_7.svg"],
      links: 1,
      messages: 1,
      tasks: 1,
    },
    {
      id: 2,
      taskId: "#002",
      title: "Create calendar, app and chat messages",
      category: "Project",
      avatars: ["/assets/avatar_6.svg", "/assets/avatar_7.svg"],
      links: 1,
      messages: 1,
      tasks: 1,
    },
    {
      id: 3,
      taskId: "#002",
      title: "Create calendar, app and chat messages",
      category: "Development",
      avatars: ["/assets/avatar_6.svg", "/assets/avatar_7.svg"],
      links: 1,
      messages: 1,
      tasks: 1,
    },
    {
      id: 4,
      taskId: "#002",
      title: "Create calendar, app and chat messages",
      category: "Design",
      avatars: ["/assets/avatar_6.svg", "/assets/avatar_7.svg"],
      links: 1,
      messages: 1,
      tasks: 1,
    },
  ]);
  const [inProgressTasks, setInProgressTasks] = useState([
    {
      id: 1,
      taskId: "#002",
      title: "Create calendar, app and chat messages",
      category: "Development",
      avatars: ["/assets/avatar_6.svg", "/assets/avatar_7.svg"],
      links: 1,
      messages: 1,
      tasks: 1,
    },
    {
      id: 2,
      taskId: "#002",
      title: "Create calendar, app and chat messages",
      category: "Design",
      avatars: ["/assets/avatar_6.svg", "/assets/avatar_7.svg"],
      links: 1,
      messages: 1,
      tasks: 1,
    }
  ]);
  const [doneTasks, setDoneTasks] = useState([
    {
      id: 1,
      taskId: "#002",
      title: "Create calendar, app and chat messages",
      avatars: ["/assets/avatar_6.svg", "/assets/avatar_7.svg"],
      links: 1,
      messages: 1,
      tasks: 1,
    },
    {
      id: 2,
      taskId: "#002",
      title: "Create calendar, app and chat messages",
      avatars: ["/assets/avatar_6.svg", "/assets/avatar_7.svg"],
      links: 1,
      messages: 1,
      tasks: 1,
    },
    {
      id: 3,
      taskId: "#002",
      title: "Create calendar, app and chat messages",
      avatars: ["/assets/avatar_6.svg", "/assets/avatar_7.svg"],
      links: 1,
      messages: 1,
      tasks: 1,
    },
    {
      id: 4,
      taskId: "#002",
      title: "Create calendar, app and chat messages",
      avatars: ["/assets/avatar_6.svg", "/assets/avatar_7.svg"],
      links: 1,
      messages: 1,
      tasks: 1,
    },
    {
      id: 5,
      taskId: "#002",
      title: "Create calendar, app and chat messages",
      avatars: ["/assets/avatar_6.svg", "/assets/avatar_7.svg"],
      links: 1,
      messages: 1,
      tasks: 1,
    },
  ]);

  return (
    <div className="flex-1 false lg:block">
      <ContentNav />
      <div className="flex flex-col items-center justify-between gap-2 px-[16px] py-[28px] md:px-[36px] xl:flex-row">
        <div className="flex items-center gap-[24px]">
          <p className="text-3xl font-semibold text-[#1F2633]">Task Boards</p>
          <Image src="/assets/edit.svg" alt="edit" width={20} height={20} />
        </div>
        <div className="flex flex-wrap justify-center gap-[10px] md:gap-[24px] xl:gap-[32px]">
          <p className="cursor-pointer text-[11px] font-semibold text-[#3B82F6] underline decoration-[#3B82F6] decoration-1 underline-offset-8">
            Timeline
          </p>
          <p className="cursor-pointer text-[11px] font-semibold text-[#7A8699]">
            Calendar
          </p>
          <p className="cursor-pointer text-[11px] font-semibold text-[#7A8699]">
            Dashboard
          </p>
          <p className="cursor-pointer text-[11px] font-semibold text-[#7A8699]">
            Progress
          </p>
          <p className="cursor-pointer text-[11px] font-semibold text-[#7A8699]">
            Forms
          </p>
          <p className="cursor-pointer text-[11px] font-semibold text-[#7A8699]">
            More
          </p>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <div className="flex -space-x-4">
            <Image
              src="/assets/avatar.svg"
              alt="avatar"
              width={40}
              height={40}
            />
            <Image
              src="/assets/avatar__2.svg"
              alt="avatar"
              width={40}
              height={40}
            />
            <Image
              src="/assets/avatar__3.svg"
              alt="avatar"
              width={40}
              height={40}
            />
            <Image
              src="/assets/avatar__4.svg"
              alt="avatar"
              width={40}
              height={40}
            />
          </div>
          <Image
            src="/assets/add_button.svg"
            alt="add button"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-3 px-[16px] pb-[28px] md:px-[36px] xl:flex-row">
        <div className="flex w-full flex-wrap items-center justify-between gap-2 xl:w-auto xl:gap-4">
          <div className="grid grid-cols-2 gap-2 rounded-lg bg-white drop-shadow-sm">
            <div className="flex cursor-pointer items-center gap-2 rounded-l-lg border-r-[1px] border-[#EBEEF2] bg-[#FAFBFC] p-[8px]">
              <Image
                src="/assets/dashboard.svg"
                alt="icon"
                width={20}
                height={20}
              />
              <p className="text-[12px] font-semibold text-[#606C80]">
                Board View
              </p>
            </div>
            <div className="flex cursor-pointer items-center gap-2 p-[8px]">
              <Image
                src="/assets/hamburger.svg"
                alt="icon"
                width={20}
                height={20}
              />
              <p className="text-[12px] font-semibold text-[#606C80]">
                List View
              </p>
            </div>
          </div>
          <div className="hidden h-8 w-[1px] bg-[#EBEEF2] xl:block" />
          <div className="flex cursor-pointer items-center gap-2">
            <Image src="/assets/lock.svg" alt="lock" width={20} height={20} />
            <p className="text-[12px] font-semibold text-[#98A2B2]">
              Limited Access
            </p>
            <Image
              src="/assets/keyboard_arrow_down.svg"
              alt="keyboard arrow down"
              width={20}
              height={20}
            />
          </div>
          <div className="hidden h-8 w-[1px] bg-[#EBEEF2] xl:block" />
          <div className="flex items-center gap-2">
            <p className="cursor-pointer text-[12px] font-semibold text-[#98A2B2]">
              Owners
            </p>
            <Image
              src="/assets/twitter.svg"
              alt="twitter icon"
              width={30}
              height={30}
            />
            <p className="cursor-pointer text-[12px] font-semibold text-[#606C80]">
              Twitter Team
            </p>
          </div>
        </div>
        <div className="flex w-full max-w-[300px] items-center gap-3 self-start rounded-md border-[1px] border-[#EBEEF2] bg-white py-[8px] pl-[8px] pr-8 xl:w-auto">
          <Image src="/assets/search.svg" alt="" width={20} height={20} />
          <p className="text-[12px] font-semibold text-[#98A2B2]">
            Search Tasks
          </p>
        </div>
        <div className="flex gap-2 self-start">
          <div className="rounded-lg bg-white p-2 drop-shadow-sm">
            <Image
              src="/assets/select_file.svg"
              alt="select file"
              width={20}
              height={20}
            />
          </div>
          <div className="rounded-lg bg-white p-2 drop-shadow-sm">
            <Image
              src="/assets/select_file.svg"
              alt="select file"
              width={20}
              height={20}
            />
          </div>
          <div className="rounded-lg bg-white p-2 drop-shadow-sm">
            <Image
              src="/assets/select_file.svg"
              alt="select file"
              width={20}
              height={20}
            />
          </div>
          <div className="rounded-lg bg-white p-2 drop-shadow-sm">
            <Image
              src="/assets/select_file.svg"
              alt="select file"
              width={20}
              height={20}
            />
          </div>
          <div className="rounded-lg bg-white p-2 drop-shadow-sm">
            <Image
              src="/assets/select_file.svg"
              alt="select file"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-[24px] px-[16px] pb-[28px] md:grid-cols-2 md:px-[36px] xl:grid-cols-4">
        <div>
          <div className="flex items-center justify-between pb-[28px]">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[14px] font-medium">Backlog Tasks</p>
              <p className="bg-[#CA8A04] text-[#CA8A04] rounded-full bg-opacity-10 px-[8px] py-[4px] text-[10px] font-bold">
                5
              </p>
            </div>
            <div></div>
          </div>
          <div className="flex flex-col gap-4">
            {backlogTasks.map((task) => (
              <TaskCard key={task.id} product={task} status={"Backlog"} />
            ))}
            <AddButton />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between pb-[28px]">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[14px] font-medium">Todo Tasks</p>
              <p className="bg-[#DB2777] text-[#DB2777] rounded-full bg-opacity-10 px-[8px] py-[4px] text-[10px] font-bold">
                5
              </p>
            </div>
            <div></div>
          </div>
          <div className="flex flex-col gap-4">
            {todoTasks.map((task) => (
              <TaskCard key={task.id} product={task} status={"To Do"} />
            ))}
            <AddButton />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between pb-[28px]">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[14px] font-medium">In Progress</p>
              <p className="bg-[#9333EA] text-[#9333EA] rounded-full bg-opacity-10 px-[8px] py-[4px] text-[10px] font-bold">
                5
              </p>
            </div>
            <div></div>
          </div>
          <div className="flex flex-col gap-4">
            {inProgressTasks.map((task) => (
              <TaskCard key={task.id} product={task} status={"In Progress"} />
            ))}
            <AddButton />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between pb-[28px]">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[14px] font-medium">Done</p>
              <p className="bg-[#16A34A] text-[#16A34A] rounded-full bg-opacity-10 px-[8px] py-[4px] text-[10px] font-bold">
                5
              </p>
            </div>
            <div></div>
          </div>
          <div className="flex flex-col gap-4">
            {doneTasks.map((task) => (
              <TaskCard key={task.id} product={task} status={"Done"} />
            ))}
            <AddButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
