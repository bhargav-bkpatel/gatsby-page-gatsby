import SpeakerCard from "../speaker-card";

const Speakers = () => {
  return (
    <div className="home-max-width2 max-content-container">
      <div className="home-heading-container">
        <span className="home-text11">
          16 speakers from 7 countries and 3 continents
        </span>
        <h1 className="home-text12 heading2">
          <span>meet our speakers</span>
          <span className="home-text14"></span>
        </h1>
      </div>
      <div className="home-speakers-container">
        <SpeakerCard></SpeakerCard>
        <SpeakerCard
          role="digital marketing associate @ WPP"
          lastName="Simpson"
          firstName="Mellisa"
          image_src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBlb3BsZXxlbnwwfHx8fDE2NDM3MDU1MTE&amp;ixlib=rb-1.2.1&amp;h=300"
        ></SpeakerCard>
        <SpeakerCard
          role="VP OF Marketing @ BUZZFEED"
          lastName="tevlenko"
          firstName="alina"
          image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHBlb3BsZXxlbnwwfHx8fDE2NDM3MDU1MTE&amp;ixlib=rb-1.2.1&amp;h=300"
        ></SpeakerCard>
        <SpeakerCard
          role="HEAD OF DIGITAL @ HUBSPOT"
          lastName="iprovich"
          firstName="gregor"
          image_src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI5fHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&amp;ixlib=rb-1.2.1&amp;h=300"
        ></SpeakerCard>
        <SpeakerCard
          role="marketing officer @ salesforce"
          lastName="daris"
          firstName="damian"
          image_src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&amp;ixlib=rb-1.2.1&amp;h=300"
        ></SpeakerCard>
        <SpeakerCard
          role="social media manager @ vodafone"
          lastName="warren"
          firstName="matt"
          image_src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0N3x8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY5MQ&amp;ixlib=rb-1.2.1&amp;h=300"
        ></SpeakerCard>
        <SpeakerCard
          role="creative director @ BBDO"
          lastName="moore"
          firstName="kathie"
          image_src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2OHx8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY5MQ&amp;ixlib=rb-1.2.1&amp;h=300"
        ></SpeakerCard>
        <SpeakerCard
          role="CMO @ youtube Europe"
          lastName="chan"
          firstName="erick"
          image_src="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwNHx8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY4MQ&amp;ixlib=rb-1.2.1&amp;h=300"
        ></SpeakerCard>
      </div>
    </div>
  );
};
export default Speakers;
