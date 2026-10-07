import LeftMainNewsCard from "./leftMainNewsCard";
import LeftMainNewsList from "./leftMainNewsList";
import TopNewsPage from "./topNews";

const HomePage = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");

  const data = await res.json();
  const newsSection = data.data;
  const topNewsData = newsSection[1].articles;
  // console.log(topNewsData);
  const mainNewsCard = newsSection[0].articles[0];
  const mainNewsList = newsSection[0].articles.slice(2, 6);

  return (
    <div className="mx-auto mt-10 grid max-w-7xl grid-cols-3 gap-5">
      {/* Left Section */}
      <div className="col-span-2">
        <div className="flex items-stretch gap-5">
          {/* Main Card */}
          <div className="flex-1">
            <LeftMainNewsCard mainNewsCard={mainNewsCard} />
          </div>

          {/* News List */}
          <div className="flex-1">
            <LeftMainNewsList mainNewsList={mainNewsList} />
          </div>
        </div>

        {/* নির্বাচিত খবর */}
        <TopNewsPage topNewsData={topNewsData}></TopNewsPage>
      </div>

      {/* Right Section */}
      <div className="col-span-1 rounded-xl bg-green-700 p-5"></div>
    </div>
  );
};

export default HomePage;
