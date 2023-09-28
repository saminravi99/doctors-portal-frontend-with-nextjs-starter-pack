import Navbar from "@/components/ui/Navbar/Navbar";
import Sidebar from "@/components/ui/Sidebar/Sidebar";
import React from "react";

const AdminSidebar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    { key: "1", label: "Admins", href: "/admins" },
    { key: "2", label: "My Profile", href: "/admins/my-profile" },
  ];
  return <Sidebar items={items}>{children}</Sidebar>;
};

export default AdminSidebar;
