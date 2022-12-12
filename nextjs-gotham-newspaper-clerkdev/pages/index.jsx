import PageHeader from "../components/PageHeader";
import Article from "../components/Article";
import LoginBanner from "../components/LoginBanner";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const Home = () => (
  <div>
    <PageHeader />
    <SignedIn>
      <Article />
    </SignedIn>
    <SignedOut>
      <LoginBanner />
    </SignedOut>
  </div>
);

export default Home;
