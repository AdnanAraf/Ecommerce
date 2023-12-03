import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const useReview = () => {
  const { user } = useContext(AuthContext);
  const carddata = useLoaderData();

  const {
    data: reviews = [],
    isLoading: loading,
    refetch,
    isError,
  } = useQuery({
    queryKey: ["review", carddata._id], // Include the product ID in the dependency array
    queryFn: async () => {
      const res = await fetch(
        `https://toys-server-teal.vercel.app/review?productId=${carddata._id}`
      );
      return res.json();
    },
  });
  return [reviews, refetch, loading, isError];
};
export default useReview;
