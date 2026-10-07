interface MainNewsListType {
  category: string;
  description: string;
  id: string;
  imageAlt: string;
  imageUrl: string;
  isLive: boolean;
  lastPublished: string;
  link: string;
  source: string;
  title: string;
  type: string;
}

interface LeftMainNewsListProps {
  mainNewsList: MainNewsListType[];
}

const LeftMainNewsList = ({ mainNewsList }: LeftMainNewsListProps) => {
  return (
    <div className=" bg-white shadow-lg flex h-full flex-col border border-gray-200 rounded-xl ">
      {mainNewsList.map((data) => (
        <div
          key={data.id}
          className="flex flex-1 flex-col justify-center border-b-2 border-gray-200  p-4  "
        >
          <p className="mb-1 text-xs font-semibold text-red-700">
            {data.category}
          </p>

          <h2 className="line-clamp-2 text-base font-semibold leading-snug text-gray-900 hover:text-red-700">
            {data.title}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default LeftMainNewsList;
