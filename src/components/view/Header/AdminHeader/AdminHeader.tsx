import { authOptions } from "@/app/lib/AuthOptions";
import Navbar from "@/components/ui/Navbar/Navbar";
import { getServerSession } from "next-auth";

const AdminHeader = async () => {
  const items = [
    { key: "1", label: "Admins", href: "/admins" },
    { key: "2", label: "My Profile", href: "/admins/my-profile" },
  ];
  const session : any = await getServerSession(authOptions);
  return (
    <>
      <Navbar
        items={items}
        hasSider
        session={session?.accessToken ? true : false}
      />
    </>
  );
};

export default AdminHeader;
