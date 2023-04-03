
const Hero =()=>{
    return <div className="home-max-width max-content-container">
    <div className="home-content-container">
      <h1 className="home-text heading1">
        <span>
          THE MOST INSIGHTFUL
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="home-text02">MARKETING CONFERENCE</span>
        <br></br>
        <span>IN EUROPE</span>
        <span></span>
      </h1>
      <span className="home-text05">
        <span>GET YOUR TICKETS AT A HALF PRICE UNTIL 10.10.2022.</span>
        <br></br>
        <span>HURRY UP, LIMITED NUMBERS AVAILABLE.</span>
      </span>
      <div className="home-btns-container">
        <button className="home-primary button-primary button-lg button">
          register now
        </button>
        <button className="button button-outline button-lg-border">
          learn more
        </button>
      </div>
    </div>
    <div className="home-video-container">
      <video
        src
        muted="true"
        poster="/playground_assets/rectangle%205-1200w.png"
        autoPlay="true"
        controls="true"
        className="home-video"
      ></video>
    </div>
  </div>
}
export default Hero