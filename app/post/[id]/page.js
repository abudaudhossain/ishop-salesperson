import { fetchDataFromServer } from "@/lib/axios";

export async function generateMetadata({ params }) {
    // read route params

    const data = await fetchDataFromServer("/posts/" + params.id);

    return {
        title: "Post Page: " + data.title,
        description:
            "sequi sint nihil reprehenderit dolor beatae ea dolores neque",
    };
}

const Post = async ({ params }) => {
    const item = await fetchDataFromServer("/posts/" + params.id);

    return (
        <div className="min-h-screen">
            <h1 className="text-xl text-center">Post Page</h1>
            <div>
                <h1 key={item.id}>{item.title}</h1>
                <p>{item.body}</p>
            </div>
        </div>
    );
};

export default Post;
