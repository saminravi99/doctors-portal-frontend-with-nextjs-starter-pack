import Sidebar from "@/components/ui/Sidebar/Sidebar";
import React from "react";

const PatientSidebar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    { key: "1", label: "My Appointments", href: "/my-appointments" },
    { key: "2", label: "My Profile", href: "/admins/my-profile" },
  ];
  return <Sidebar items={items}>{children}</Sidebar>;
};

export default PatientSidebar;
