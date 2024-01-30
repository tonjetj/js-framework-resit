import React from "react";

function useProductTags({ product }) {
  const addSpaces = (tags) => {
    return tags.join(", ");
  };

  return <div>{addSpaces(product.tags)}</div>;
}
