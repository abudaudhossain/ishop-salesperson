"use client";
import React from "react";
import { motion } from "framer-motion";

const Post = ({ data }) => {
    return (
        <>
            <motion.h1
                animate={{
                    fontSize: "30px",
                    color: "#ff0000"
                }}
                className=" text-center mt-4"
            >
                Post Page
            </motion.h1>
            <div className="ml-4">
                {data.map((item) => (
                    <div className="my-4" key={item.title}>
                        <h1 className="text-2xl">{item.title}</h1>
                        <p>{item.body}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Post;
