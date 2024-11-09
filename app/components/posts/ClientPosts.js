"use client";
import Loading from "@/app/post/loading";
import { instance } from "@/lib/api/clientSideAPI";
import React, { useState } from "react";

const ClientPosts = () => {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            let response = await instance.get("/posts?_page=2&_limit=2");
            setData(response.data);
            setIsLoading(false);
            console.log(response.data);
        } catch (error) {
            // console.log("error: ",error.response);
            setError(error);
            setIsLoading(false);
        }
    };

    console.log(data, error, isLoading);
    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <button className="" onClick={fetchData}>
                Fetch Post
            </button>
            {data?.map((item) => (
                <h1 key={item.id}>{item.title}</h1>
            ))}
        </div>
    );
};

export default ClientPosts;
