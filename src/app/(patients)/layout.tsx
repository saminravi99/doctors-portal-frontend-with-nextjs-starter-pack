import PatientHeader from "@/components/view/Header/PatientNavbar";
import PatientSidebar from "@/components/view/Sidebar/PatientSidebar";
import React from "react";

const PatientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <PatientHeader />
      <PatientSidebar>{children}</PatientSidebar>
    </div>
  );
};

export default PatientLayout;
