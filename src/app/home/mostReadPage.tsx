interface MostReadType {
  id: string;
  title: string;
}

const MostReadPage = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");

  const data = await res.json();
  const mostReadData: MostReadType[] = data.data;

  console.log(mostReadData);

  return (
    <div className="rounded-xl border border-gray-300 bg-white p-5 shadow-lg">
      <h1 className="mb-5 border-b border-gray-300 pb-3 text-2xl font-bold text-black">
        সর্বাধিক পঠিত
      </h1>

      <div>
        {mostReadData.map((data, index) => (
          <div
            className="flex gap-3 border-b border-gray-200 py-3 last:border-b-0"
            key={data.id}
          >
            <p className="font-extrabold text-red-800">{index + 1}</p>

            <h1 className="text-[16px] font-bold text-gray-800 transition-colors duration-300 hover:text-red-700">
              {data.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostReadPage;
