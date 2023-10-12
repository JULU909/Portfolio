import './Home.css'


function Home() {
    return (
      <div className="home-container">
      <div className="image-container">
        <img src={process.env.PUBLIC_URL + '/headGreen.png'} alt="Your Image" />
      </div>
      <div className="description-container">
      <div class="floating-text">
  <h1>Hi, I am Harish Vasanth.</h1>
  <p>Machine Learning Engineer</p>
</div>
      </div>


    </div>
  )}
  ;
  
  export default Home;
  