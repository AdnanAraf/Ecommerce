import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useCart = () => {
  const { user } = useContext(AuthContext);

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://toys-server-teal.vercel.app/carts?email=${user?.email}`
      );
      // console.log(res);
      return res.json();
    },
  });

  return [cart, refetch];
};
export default useCart;
