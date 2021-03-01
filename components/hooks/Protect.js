import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "../../stores/user";

export default function Protect() {
  const { replace, pathname } = useRouter();

  const storeUsername = useUser((state) => state.username);

  useEffect(() => {
    if (storeUsername !== "") {
      if (["/"].some((i) => i === pathname)) {
        replace("/dashboard");
      }
    } else {
      if (!["/"].some((i) => i === pathname)) {
        replace("/");
      }
    }
  }, [storeUsername]);
  return void "";
}
