import EventCard from "../event-card";

const Agenda = () => {
  return (
    <div className="home-max-width3 max-content-container">
      <div className="home-heading-container2">
        <h1 className="home-text31 heading2">
          <span>key events agenda</span>
        </h1>
        <span className="home-text33">more announcements are coming soon</span>
      </div>
      <div className="home-events-container">
        <div className="home-column">
          <div className="home-column-header">
            <span className="home-text34">
              <span>tuesday - 7.03</span>
            </span>
            <div className="home-line"></div>
          </div>
          <EventCard></EventCard>
          <EventCard
            title="tik tok or what?"
            image_src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBlb3BsZXxlbnwwfHx8fDE2NDM3MDU1MTE&amp;ixlib=rb-1.2.1&amp;h=300"
          ></EventCard>
          <EventCard
            title="sales + marketing duo"
            image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHBlb3BsZXxlbnwwfHx8fDE2NDM3MDU1MTE&amp;ixlib=rb-1.2.1&amp;h=300"
          ></EventCard>
          <EventCard
            title="best practices for more\ndata-driven results"
            image_src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI5fHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&amp;ixlib=rb-1.2.1&amp;h=300"
          ></EventCard>
        </div>
        <div className="home-column1">
          <div className="home-column-header1">
            <span className="home-text36">
              <span>wednesday - 8.03</span>
            </span>
            <div className="home-line1"></div>
          </div>
          <EventCard
            title="digital marketing strategies"
            image_src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&amp;ixlib=rb-1.2.1&amp;h=300"
          ></EventCard>
          <EventCard
            title="a new era of social media"
            image_src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0N3x8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY5MQ&amp;ixlib=rb-1.2.1&amp;h=300"
          ></EventCard>
          <EventCard
            title="growing a remote team"
            image_src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2OHx8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY5MQ&amp;ixlib=rb-1.2.1&amp;h=300"
          ></EventCard>
          <EventCard
            title="beyond the metaverse"
            image_src="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwNHx8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY4MQ&amp;ixlib=rb-1.2.1&amp;h=300"
          ></EventCard>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
