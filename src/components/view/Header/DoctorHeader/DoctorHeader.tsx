import { authOptions } from "@/app/lib/AuthOptions";
import Navbar from "@/components/ui/Navbar/Navbar";
import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";

const DoctorHeader = async () => {
  const items = [{ key: "1", label: "My Profile", href: "/doctor/my-profile" }];
  const session: any = await getServerSession(authOptions);
  console.log(session);
  return (
    <>
      <Navbar
        session={session?.accessToken ? true : false}
        items={items}
        hasSider
      />
    </>
  );
};

export default DoctorHeader;
