type Props = {
  params: {
    productId: string;
    reviewId: string;
  };
};

export default function ProductReview({ params }: Props) {
  return (
    <div>
      <h1>
        Product {params.productId}
        <br />
        Review: {params.reviewId}
      </h1>
    </div>
  );
}
