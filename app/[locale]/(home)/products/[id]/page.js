import BackButton from "@/app/components/BackButton";
import { details } from "@/lib/api/products";
import Image from "next/image";
import AddToCart from "./components/AddToCart";

const ProductDetail = async ({params}) => {
  const data = await details(params.id);
  const product = data.data;

  return (
    <div className="min-h-screen max-w-[600px] m-auto px-4 pt-4 mb-16">
      <BackButton />
      <div className="rounded-lg overflow-hidden mt-4">
        <div className="">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="w-full h-80 object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            {product.title}
          </h2>
          <p className="text-gray-600 mt-2 text-justify">{product.description}</p>

          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
