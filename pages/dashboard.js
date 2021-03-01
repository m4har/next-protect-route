import Head from "next/head";
import { useEffect, useState } from "react";
import { useUser } from "../stores/user";

export default function dashboard() {
  const username = useUser((state) => state.username);
  const setStoreUsername = useUser((state) => state.postUser);
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(username);
  }, [username]);
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div style={{ backgroundColor: "red" }}>Welkom to dashboard {user}</div>
      <button onClick={() => setStoreUsername("")}>clean</button>
    </div>
  );
}
