import { fetchDataFromServer } from "@/lib/axios";
import ClientPosts from "../components/posts/ClientPosts";
import Link from "next/link";

export async function generateMetadata({ params }) {
    // read route params

    return {
        title: "Post Page: ",
        description:
            "sequi sint nihil reprehenderit dolor beatae ea dolores neque",
    };
}

const Post = async () => {
    const data = await fetchDataFromServer("/posts?_page=1&_limit=2");

    return (
        <div className="min-h-screen">
            <h1 className="text-xl text-center">Post Page</h1>
            <div>
                {data.map((item) => (
                    <Link
                        key={item?.id}
                        href={`http://localhost:3000/post/${item?.id}`}
                    >
                        <h1>{item.title}</h1>
                    </Link>
                ))}
            </div>
            <ClientPosts />
        </div>
    );
};

export default Post;
