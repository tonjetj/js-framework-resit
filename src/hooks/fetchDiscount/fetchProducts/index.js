import { useState, useEffect } from "react";
import { API_BASE, Products } from "../../../api";

const useFetchProducts = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = API_BASE + Products;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const fetchedData = await response.json();
        setProducts(fetchedData);
      } catch (error) {
        setError(error);
        console.error("Error occurred while retrieving products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { products, loading, error };
};

export default useFetchProducts;
