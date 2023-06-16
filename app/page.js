"use client";
import Content from "@/components/Content/Content";
import Sidebar from "@/components/Sidebar/Sidebar";
import Users from "@/components/Users/Users";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const toggleOpen = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <>
      <div className="flex min-h-screen flex-col bg-[#F7F8FA] lg:flex-row">
        <Sidebar open={open} toggle={toggleOpen} />
        <Content open={open} />
        <Users />
      </div>
    </>
  );
}
