import { BanglaNewsType } from "./types";
import NavLinkClient from "./NavLinkClient";

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
  return <NavLinkClient filterNavData={filterNavData}></NavLinkClient>;
};

export default NavLinks;
