"use client"
import { useRouter } from 'next/navigation';

const BackButton = () => {
      const router = useRouter();
  return (
    <span
      onClick={() => router.back()}
      className="inline-flex items-center border border-teal-500 px-3 py-1.5 rounded-md text-teal-500 hover:bg-teal-700 hover:text-white cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 16l-4-4m0 0l4-4m-4 4h18"
        ></path>
      </svg>
      <span className="ml-1 font-bold text-lg">Back</span>
    </span>
  );
};

export default BackButton;
