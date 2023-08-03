import { getProductsDetails } from "@/api/utils";
import ProductDetails from "../../../../components/PageComponents/ProductDetails";

export default async function Details({ params }) {
  const detailsData = await getProductsDetails(params.productId);

  return (
    <>
      <ProductDetails product={detailsData} />
    </>
  );
}
