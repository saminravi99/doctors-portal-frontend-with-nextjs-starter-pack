"use client";
import { addTwoNum } from "@/utils/addTwoNum";
import { Button } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

const AdminTable = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <>
      <Button
        onClick={() => {
          addTwoNum(1, 2);
        }}
      >
        Add Number
      </Button>
      <Title level={3}>{title}</Title>
      {children}
    </>
  );
};

export default AdminTable;
