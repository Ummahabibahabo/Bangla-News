"use client";
import Link from "next/link";
import { BanglaNewsType } from "./types";
import { usePathname } from "next/navigation";
interface NavLinkClientProps {
  filterNavData: BanglaNewsType[];
}

const NavLinkClient = ({ filterNavData }: NavLinkClientProps) => {
  const pathname = usePathname();
  return (
    <div className="flex justify-center gap-5 mt-5 text-gray-500">
      <Link
        href={"/"}
        className={
          pathname === "/"
            ? "text-red-700 underline decoration-red-700 underline-offset-4"
            : ""
        }
      >
        হোম
      </Link>
      {filterNavData.map((singleNavData, index) => {
        return (
          <Link
            key={index}
            href={`/category/${singleNavData.slug}`}
            className={
              pathname === `/category/${singleNavData.slug}`
                ? "text-red-700 underline-offset-4 underline decoration-red-700"
                : ""
            }
          >
            {singleNavData.title}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinkClient;
