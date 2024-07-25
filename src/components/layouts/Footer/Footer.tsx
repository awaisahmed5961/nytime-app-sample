import { FC } from "react";

const Footer: FC = () => {
  return (
    <div
      className="flex items-center justify-center w-full py-5 bg-gray-800 text-white"
      data-testid="footer"
    >
      <p className="text-center">
        Copyright (c) {new Date().getFullYear()} The New York Times Company. All
        Rights Reserved. ©{" "}
      </p>
    </div>
  );
};

export default Footer;
