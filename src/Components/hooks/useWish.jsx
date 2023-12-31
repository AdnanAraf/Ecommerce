import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useWish = () => {
  const { user } = useContext(AuthContext);

  const { refetch, data: Wish = [] } = useQuery({
    queryKey: ["WishCart", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://toys-server-teal.vercel.app/WishCart?email=${user?.email}`
      );
      return res.json();
    },
  });

  return [Wish, refetch];
};

export default useWish;
