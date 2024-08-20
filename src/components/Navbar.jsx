import Footer from "./Footer";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopNav />
      </div>
      <div className="block lg:hidden">
        <MobileNav />
      </div>
      <div>
        <Outlet />
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
}
