import Link from "next/link";
import { BanglaNewsType } from "./types";

const getNavLinks = async (): Promise<BanglaNewsType[]> => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  return data.data;
};
const NavLinks = async () => {
  const navData = await getNavLinks();
  const filterNavData = navData.filter(
    (singleNavData) => singleNavData.scrapable,
  );
  return (
    <div className="flex justify-center gap-5 mt-5 text-gray-500">
      <Link href={"/slug"}>হোম</Link>
      {filterNavData.map((singleNavData, index) => {
        return (
          <Link key={index} href={singleNavData.slug}>
            {singleNavData.title}{" "}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
