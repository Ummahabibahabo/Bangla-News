import CategoryCardPage from "@/components/cards/CategoryCard";

interface CategoryNewsProps {
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
}
interface PageProps {
  params: Promise<{ categoryId: string }>;
}
const CategoryNews = async ({ params }: PageProps) => {
  const { categoryId } = await params;
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
  );
  const data = await res.json();
  const categorySingleData: CategoryNewsProps[] = data.data;

  return (
    <div>
      <div>
        <h1 className="py-10 border-b-3 border-red-700 text-black font-bold text-[36px]">
          {data.title}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categorySingleData.map((singleData) => (
          <CategoryCardPage
            key={singleData.id}
            singleData={singleData}
            data={data}
          ></CategoryCardPage>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
