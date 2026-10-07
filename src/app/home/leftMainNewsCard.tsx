import Image from "next/image";

interface MainNewsCards {
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

interface LeftMainNewsCardProps {
  mainNewsCard: MainNewsCards;
}

const LeftMainNewsCard = ({ mainNewsCard }: LeftMainNewsCardProps) => {
  const { imageUrl, imageAlt, category, title, description, lastPublished } =
    mainNewsCard;

  const date = new Date(lastPublished).toLocaleString("bn-BD", {
    timeZone: "Asia/Dhaka",
    dateStyle: "long",
    timeStyle: "short",
  });

  return (
    <div className="h-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <Image
        className="h-[230px] w-full object-cover"
        src={imageUrl}
        alt={imageAlt}
        height={600}
        width={600}
      />

      <div className="space-y-3 p-5">
        <p className="text-sm font-semibold text-red-700">{category}</p>

        <h1 className="text-xl font-bold leading-snug text-gray-900 hover:text-red-700">
          {title}
        </h1>

        <p className="line-clamp-3 text-sm leading-relaxed text-gray-500">
          {description}
        </p>

        <p className="text-xs text-gray-400">{date}</p>
      </div>
    </div>
  );
};

export default LeftMainNewsCard;
