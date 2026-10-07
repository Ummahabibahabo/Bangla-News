import LogoImg from "@/app/assests/image.png";
import Image from "next/image";

import NavLinks from "./NavLinks";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <nav>
      <nav>
        <div className="relative flex items-center justify-center">
          <div className="flex items-center gap-3">
            <Image
              className="w-[50px] h-[50px]"
              src={LogoImg}
              alt="Bangla News 24"
              width={50}
              height={50}
            />

            <h1 className="text-2xl font-bold text-red-700">Bangla News 24</h1>
          </div>

          <div className="absolute right-0 flex items-center gap-5 hover:text-red-900">
            <button className="text-gray-500">সাইন ইন</button>

            <button className="px-3 py-2 rounded-xl bg-red-900 text-white">
              সাইন আপ
            </button>
          </div>
        </div>
      </nav>
      <NavLinks></NavLinks>
    </nav>
  );
};

export default Navbar;
