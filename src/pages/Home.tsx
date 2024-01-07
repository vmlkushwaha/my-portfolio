import { IMAGES } from "../assets";

const Home = () => {
  return (
    <div className="home_container container">
      <div className="home_container-left">
        <p className="intro">Hey, I’m Vimal Kushwaha 👋🏼</p>
        <h2>
          <span>Front</span>end
          <br />
          Developer
        </h2>
        <p className="home_container-left_body">
          Dedicated Frontend Developer based in India, committed to delivering
          innovative and seamless user experiences with precision.
        </p>
      </div>
      <div className="home_container-right">
        <div className="home_container-right-assets1"></div>
        <div className="home_container-right-assets2"></div>

        <img src={IMAGES.MY_PHOTO} />
      </div>
    </div>
  );
};

export default Home;
