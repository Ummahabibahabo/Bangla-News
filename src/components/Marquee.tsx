import Link from "next/link";
import { BanglaNewsType } from "./types";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const marqueeData = data.data;
  return (
    <div className="flex items-center bg-red-600 text-white font ">
      <div className="flex max-w-7xl mx-auto">
        <div className="bg-red-800 py-2 px-3 ">সর্বশেষ</div>

        <MarqueeText className="py-2" direction="right" duration={10}>
          {marqueeData.map((singleMarqueeData: BanglaNewsType) => {
            return (
              <Link
                key={singleMarqueeData.id}
                href={""}
                className=" hover:underline"
              >
                {singleMarqueeData.title}
                <span className="mx-5 ">ㆍ</span>
              </Link>
            );
          })}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
