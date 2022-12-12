import PageHeader from "../components/PageHeader";
import Article from "../components/Article";
import LoginBanner from "../components/LoginBanner";

const Home = () => {
  const loggedIn = false;

  return (
    <div>
      <PageHeader />
      {loggedIn ? <Article /> : <LoginBanner />}
    </div>
  );
};

export default Home;
