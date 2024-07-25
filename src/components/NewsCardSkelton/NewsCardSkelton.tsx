import { FC } from "react";

const NewsCardSkeleton: FC = () => {
  return (
    <div
      className="bg-white border border-gray-200 rounded-lg shadow-md p-4 mb-4 animate-pulse"
      role="status"
    >
      <div
        role="presentation"
        className="w-full h-64 bg-gray-200 rounded-md mb-4"
      ></div>
      <div
        role="presentation"
        className="h-6 bg-gray-200 rounded w-3/4 mb-2"
      ></div>
      <div
        role="presentation"
        className="h-4 bg-gray-200 rounded w-1/2 mb-2"
      ></div>
      <div
        role="presentation"
        className="h-4 bg-gray-200 rounded w-1/2 mb-4"
      ></div>
      <div role="presentation" className="h-4 bg-gray-200 rounded w-full"></div>
    </div>
  );
};

export default NewsCardSkeleton;
