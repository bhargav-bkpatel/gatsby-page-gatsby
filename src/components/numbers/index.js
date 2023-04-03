import NumbersCard from "../numbers-card";

const Number = () => {
  return (
    <div className="home-container2 max-content-container">
      <div className="home-heading-container1">
        <span className="home-text15">
          Our 12-year conference history in sharing digital marketing insights
        </span>
        <h1 className="home-text16 heading2">
          <span>market1 SUMMIT IN NUMBERS</span>
        </h1>
      </div>
      <div className="home-numbers-container">
        <NumbersCard></NumbersCard>
        <NumbersCard
          text="years"
          number="12"
          image_src="/playground_assets/interface%20time%20reset-200h.png"
        ></NumbersCard>
        <NumbersCard
          text="total events"
          number="64"
          image_src="/playground_assets/interface%20calendar%20favorite-200h.png"
        ></NumbersCard>
        <NumbersCard
          text="companies"
          number="15,070"
          image_src="/playground_assets/shopping%20bag%20suit%20case-200h.png"
        ></NumbersCard>
        <NumbersCard
          text="cities"
          number="14"
          image_src="/playground_assets/travel%20map%20location%20pin-200h.png"
        ></NumbersCard>
        <NumbersCard
          text="speakers"
          number="1,071"
          image_src="/playground_assets/computer%20voice%20mail-200h.png"
        ></NumbersCard>
      </div>
    </div>
  );
};
export default Number;
