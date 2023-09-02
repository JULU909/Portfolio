import './Home.css'


function Home() {
    return (
      <div className="home-container">
      <div className="image-container">
        <img src={process.env.PUBLIC_URL + '/headGreen.png'} alt="Your Image" />
      </div>
      <div className="description-container">
        <h2>Hi, I am Harish Vasanth.</h2>
        <p>
            Machine Learning Engineer
        </p>
      </div>
    </div>
  )}
  ;
  
  export default Home;
  