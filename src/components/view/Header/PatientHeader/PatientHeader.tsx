import { authOptions } from "@/app/lib/AuthOptions";
import Navbar from "@/components/ui/Navbar/Navbar";
import { getServerSession } from "next-auth";

const PatientHeader = async () => {
  const items = [{ key: "1", label: "My Profile", href: "/my-profile" }];
  const session: any = await getServerSession(authOptions);
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

export default PatientHeader;
