const useFetchDiscount = (data) =>
  data.map((product) => {
    const price = parseInt(product.price);
    const discountedPrice = parseInt(product.discountedPrice);

    const hasDiscount = discountedPrice < price;
    const discount = hasDiscount
      ? Math.round(((price - discountedPrice) / price) * 100)
      : 0;

    return {
      ...product,
      discountedPrice: hasDiscount ? discountedPrice : null,
      discount: hasDiscount ? discount : null,
      hasDiscount: hasDiscount,
    };
  });

export default useFetchDiscount;
