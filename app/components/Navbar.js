import Link from "next/link";
import React from "react";

const menuItems = [
    {
        label: "Home",
        route: "/",
    },
    {
        label: "Dynamic Form",
        route: "/form",
    },
    {
        label: "Post",
        route: "/post",
    },
    
    {
        label: "Animation",
        route: "/animation",
    },
    {
        label: "Login",
        route: "/login",
    },
];

const Navbar = () => {
    return (
        <nav className="pt-4">
            {menuItems.map((item, index) => (
                <Link key={index} href={item.route} className="p-2">
                    {item.label}
                </Link>
            ))}

            <div className="py-0.5 bg-neutral-500 mt-3"></div>
        </nav>
    );
};

export default Navbar;
