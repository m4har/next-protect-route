import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useUser } from "../stores/user";

export default function Home(props) {
  const router = useRouter();

  const storeUsername = useUser((state) => state.username);

  const setStoreUsername = useUser((state) => state.postUser);

  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(storeUsername);
    console.log(props);
  }, [storeUsername]);

  const onSubmit = (e) => {
    e.preventDefault();
    setStoreUsername(user);
    router.replace("/dashboard");
  };

  return (
    <div className="h-screen w-screen bg-gray-300 items-center justify-center flex">
      <Head>
        <title>My Next</title>
      </Head>
      <form
        onSubmit={onSubmit}
        className="bg-white h-60 w-96 rounded-xl flex flex-col justify-center"
      >
        <div className="flex mx-4 mt-4">
          <span>username</span>
          <input
            required
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="username"
            className="flex-1 border-2 rounded ml-4 pl-2"
          />
        </div>
        <div className="flex mx-4 mt-4">
          <span>password</span>
          <input
            required
            placeholder="password"
            type="password"
            className="flex-1 border-2 rounded ml-4 pl-2"
          />
        </div>
        <button type="submit" className="mt-10 px-6 py-2 bg-blue-400">
          Login
        </button>
      </form>
    </div>
  );
}
export async function getStaticProps() {
  return {
    props: { foo: "bar" }, // will be passed to the page component as props
  };
}
