"use client"
import { useTranslations } from "next-intl";



const Product =  ({ params }) => {
    const t = useTranslations('ProductDetails');

    // const item = await clientSid("/posts/" + params.id);

    return (
        <div className="min-h-screen">
            <h1 className="text-xl text-center">{t('title')}</h1>
            <div>
                {/* <h1 key={item.id}>{item.title}</h1>
                <p>{item.body}</p> */}
            </div>
        </div>
    );
};

export default Product;
