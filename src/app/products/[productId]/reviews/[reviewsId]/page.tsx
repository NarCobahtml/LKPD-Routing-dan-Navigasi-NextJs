//src/app/products/[productId]/reviews/[reviewId]/page.tsx

export default async function ReviewDetail({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  return (
    <div>
      <h1>Detail Review {reviewId}</h1>
      <p>Produk ID: {productId}</p>
    </div>
  );
}
