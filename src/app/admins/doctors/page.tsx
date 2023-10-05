import Table from "@/components/ui/Table/Table";
import AdminTable from "@/components/view/Admin/AdminTable";
import { ColumnType } from "antd/es/table";
import React from "react";
import { columns } from "./columns.doctors";
import { getAllDoctors } from "@/services/doctors/get-all-doctors";
import { Doctor } from "@/interfaces/doctor.interfaces";

const AllDoctorByAdmin = async () => {
  const data: any = await getAllDoctors();
  return (
    <AdminTable title="All Doctors">
      <Table<Doctor> columns={columns} data={data} />
    </AdminTable>
  );
};

export default AllDoctorByAdmin;
