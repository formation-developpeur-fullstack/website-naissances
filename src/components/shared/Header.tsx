import { GlobalApplicationContext } from "@/context/global/GlobalApplicationContextProvider";
import { search } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect } from "react";

function Header() {
  const {
    state: { title, token },
    setCurrentUser,
  } = useContext(GlobalApplicationContext);

  const { data, isLoading } = useQuery({
    queryKey: ["user-profile"],
    queryFn: () => search({ path: "profiles/read", token }),
    retry: 2,
  });

  useEffect(() => {
    setCurrentUser(data);
  }, [data]);

  if (isLoading) {
    <header className="flex justify-between my-3 text-2xl font-bold">
      <h3>{title}</h3>
    </header>;
  }

  return (
    <header className="flex justify-between my-3 text-2xl font-bold">
      <h3>{title}</h3>
      <span>{data?.firstName}</span>
    </header>
  );
}

export default Header;
