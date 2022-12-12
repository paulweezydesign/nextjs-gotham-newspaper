import { useSession } from "next-auth/react";

import PageHeader from "../components/PageHeader";
import Article from "../components/Article";
import LoginBanner from "../components/LoginBanner";

const Home = () => {
  // Get the user session so you can check if they are
  // authenticated or not
  const { status } = useSession();

  return (
    <div>
      <PageHeader />
      {/* If the user is authenticated, show the article */}
      {status === "authenticated" ? <Article /> : <LoginBanner />}
    </div>
  );
};

export default Home;
