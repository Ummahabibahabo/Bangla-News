import Image from "next/image";

interface TopNewsType {
  category: string;
  description: string;
  firstPublished: string;
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

interface TopNewsPageProps {
  topNewsData: TopNewsType[];
}

const TopNewsPage = ({ topNewsData }: TopNewsPageProps) => {
  return (
    <div className="mt-10">
      <h1 className="mb-5 text-2xl font-bold text-black border-b-2 pb-5 border-red-700">
        নির্বাচিত খবর
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {topNewsData.map((data) => {
          const date = new Date(data.firstPublished).toLocaleString("bn-BD", {
            timeZone: "Asia/Dhaka",
            dateStyle: "long",
            timeStyle: "short",
          });

          return (
            <div
              key={data.id}
              className="group overflow-hidden rounded-xl border border-gray-300 bg-white shadow-lg"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <Image
                  className="h-56 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  src={data.imageUrl}
                  alt={data.imageAlt}
                  width={400}
                  height={400}
                />
              </div>

              {/* Content */}
              <div className="p-3">
                <p className="mb-2 text-sm font-medium text-red-700">
                  {data.category}
                </p>

                <h2 className="mb-3 line-clamp-2 text-2xl font-bold leading-snug text-black">
                  {data.title}
                </h2>

                <p className="mb-4 line-clamp-3 text-gray-600">
                  {data.description}
                </p>

                <p className="text-sm text-gray-500">{date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopNewsPage;
