import { authOptions } from "@/app/lib/AuthOptions";
import Navbar from "@/components/ui/Navbar/Navbar";
import { getServerSession } from "next-auth";

const PublicHeader = async () => {
  const items = [
    { key: "1", label: "Home", href: "/" },
    { key: "2", label: "Services", href: "/available-services" },
    { key: "3", label: "Doctors", href: "/available-doctors" },
    { key: "4", label: "About Us", href: "/about-us" },
    { key: "5", label: "Contact Us", href: "/contact-us" },
  ];
  const session: any = await getServerSession(authOptions);
  return (
    <>
      <Navbar items={items} session={session?.accessToken ? true : false} />
    </>
  );
};

export default PublicHeader;
