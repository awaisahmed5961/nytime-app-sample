import { FC } from "react";
import { Link } from "react-router-dom";

const NotFoundPage: FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-8 rounded-lg max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-lg font-medium text-gray-700 mb-4">Page Not Found</p>
        <p className="text-gray-500 mb-8">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="inline-block border border-blue-500 text-blue-500 px-4 py-2 rounded-lg shadow-sm hover:bg-blue-500 hover:text-white transition duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
