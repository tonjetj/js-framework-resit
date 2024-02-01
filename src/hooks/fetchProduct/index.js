// src/hooks/fetchProduct/index.js
import { useState, useEffect } from "react";
import { API_BASE, Products } from "../../api";

const useFetchProduct = (id) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `${API_BASE}${Products}/${id}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const fetchedData = await response.json();
        setProduct(fetchedData);
      } catch (error) {
        setError(error);
        console.error("Error occurred while retrieving product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { product, loading, error };
};

export default useFetchProduct;
