import Image from "next/image";

interface CategoryCardPageProps {
  singleData: {
    id: string;
    title: string;
    description: string;
    link: string;
    imageUrl: string;
    imageAlt: string;
    category: string;
    type: string;
    isLive: boolean;
    firstPublished: string;
    lastPublished: string;
    source: string;
  };
  data: {
    title: string;
  };
}

const CategoryCardPage = ({ singleData, data }: CategoryCardPageProps) => {
  const date = new Date(singleData.firstPublished).toLocaleString("bn-BD", {
    timeZone: "Asia/Dhaka",
    dateStyle: "long",
    timeStyle: "short",
  });

  return (
    <div className=" mt-10 border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
      <Image
        className="w-full h-[300px] object-cover"
        src={singleData.imageUrl}
        alt={singleData.imageAlt}
        width={400}
        height={400}
      />

      <div className="p-4 space-y-3 flex flex-col flex-1">
        <p className="text-[14px] text-red-700 font-medium">{data.title}</p>

        <h1 className="text-[16px] text-black font-bold leading-7">
          {singleData.title}
        </h1>

        <p className="text-[15px] text-gray-500 leading-6">
          {singleData.description}
        </p>

        <p className="text-[14px] text-gray-400 border-t border-gray-100 pt-3 mt-auto">
          {date}
        </p>
      </div>
    </div>
  );
};

export default CategoryCardPage;
