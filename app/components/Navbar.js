
import Link from "next/link";
import React from "react";

const menuItems = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Orders",
    route: "/orders",
  },
  {
    label: "products",
    route: "/products",
  },

  {
    label: "Cart",
    route: "/cart",
  },
  {
    label: "Login",
    route: "/login",
  },
];

const Navbar = () => {

  return (
    <nav className="fixed inset-x-0 bottom-0 bg-gray-800 text-white p-4 flex items-center justify-center z-10">
      <div className="py-0.5 ">
        {menuItems.map((item, index) => (
          <Link key={index} href={item.route} className="p-2">
            {item.label}
          </Link>
        ))}
       
      </div>
    </nav>
  );
};

export default Navbar;
