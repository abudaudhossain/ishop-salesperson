import { useTranslations } from "next-intl";
import Link from "next/link";

let user = {
  name: "Abu Daud Hossain",
};

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <main className="min-h-screen max-w-[600px] m-auto px-4 pt-4">
      <div>
        <h1 className="text-lg font-semibold">{t("page")}</h1>
      </div>
      <div className="my-4">
        <h1 className="text-xl font-bold">
          {t("greeting")}, {user.name}{" "}
        </h1>
        <p className="">{t("greetingMessage")}</p>
      </div>
      <div className="mb-4">
        <h1 className="font-semibold">Insights</h1>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="block rounded-lg bg-white p-6 text-surface shadow-secondary-1 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">500008</h2>
            <h5 className="mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-tight">Daily Orders</h5>
          </div>
        </div>
      </div>
      <div class="relative w-full max-w-xl mx-auto bg-white rounded-full ">
        <Link href="/products">
          <input
            placeholder="Select to product..."
            className="rounded-full w-full h-12 bg-transparent py-1 pl-8 pr-32 outline-none border-1 border-gray-100  shadow-secondary-1 hover:outline-none focus:ring-teal-200 focus:border-teal-200"
          />
          <button class="absolute inline-flex items-center h-10 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-[8px] top-[4px] bg-teal-600 sm:px-6 sm:text-base sm:font-medium hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
            <svg
              class="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            Search
          </button>
        </Link>
      </div>
      <button class=" inline-flex  items-center justify-center  rounded-full w-full h-12 px-4 py-2 my-4 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none bg-teal-600 sm:px-6 sm:text-base sm:font-medium hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
        <svg
          class="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        Scan product
      </button>
    </main>
  );
}
