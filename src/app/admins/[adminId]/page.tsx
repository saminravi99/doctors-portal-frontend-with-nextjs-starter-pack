import React from "react";
interface Props {
  params: {
    adminId: number;
  };
}
const Admins = (props: Props) => {
  const { adminId } = props.params;
  return <div>Admin number {adminId}</div>;
};

export default Admins;
