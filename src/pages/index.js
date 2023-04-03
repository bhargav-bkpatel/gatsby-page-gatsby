import React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../components/navigation'
import SpeakerCard from '../components/speaker-card'
import NumbersCard from '../components/numbers-card'
import EventCard from '../components/event-card'
import Slide from '../components/slide'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './index.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Marketing event page</title>
        <meta property="og:title" content="Marketing event page" />
      </Helmet>
      <Navigation></Navigation>
      <main className={styles['main']}>
        <div
          className={` ${styles['hero']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['content-container']}>
              <h1
                className={` ${styles['text']} ${projectStyles['heading1']} `}
              >
                <span>
                  THE MOST INSIGHTFUL
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text02']}>MARKETING CONFERENCE</span>
                <br></br>
                <span>IN EUROPE</span>
                <span></span>
              </h1>
              <span className={styles['text05']}>
                <span>GET YOUR TICKETS AT A HALF PRICE UNTIL 10.10.2022.</span>
                <br></br>
                <span>HURRY UP, LIMITED NUMBERS AVAILABLE.</span>
              </span>
              <div className={styles['btns-container']}>
                <button
                  className={` ${styles['primary']} ${projectStyles['button-primary']} ${projectStyles['button-lg']} ${projectStyles['button']} `}
                >
                  register now
                </button>
                <button
                  className={` ${projectStyles['button']} ${projectStyles['button-outline']} ${projectStyles['button-lg-border']} `}
                >
                  learn more
                </button>
              </div>
            </div>
            <div className={styles['video-container']}>
              <video
                src
                muted="true"
                poster="/playground_assets/rectangle%205-1200w.png"
                autoPlay="true"
                controls="true"
                className={styles['video']}
              ></video>
            </div>
          </div>
          <div className={styles['blue-background']}></div>
        </div>
        <div
          className={` ${styles['sponsors']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width1']} ${projectStyles['max-content-container']} `}
          >
            <span className={styles['text08']}>
              <span></span>
              <span>proudly sponsored by</span>
            </span>
            <div className={styles['container1']}>
              <img
                alt="image"
                src="/playground_assets/group%207-1200w.png"
                className={styles['image']}
              />
              <img
                alt="image"
                src="/playground_assets/group%208-1200w.png"
                className={styles['image1']}
              />
              <img
                alt="image"
                src="/playground_assets/group%209-1200w.png"
                className={styles['image2']}
              />
              <img
                alt="image"
                src="/playground_assets/group%2010-1200w.png"
                className={styles['image3']}
              />
              <img
                alt="image"
                src="/playground_assets/group%2011-1200w.png"
                className={styles['image4']}
              />
              <img
                alt="image"
                src="/playground_assets/group%2012-1200w.png"
                className={styles['image5']}
              />
            </div>
          </div>
        </div>
        <div
          className={` ${styles['speakers']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width2']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['heading-container']}>
              <span className={styles['text11']}>
                16 speakers from 7 countries and 3 continents
              </span>
              <h1
                className={` ${styles['text12']} ${projectStyles['heading2']} `}
              >
                <span>meet our speakers</span>
                <span className={styles['text14']}></span>
              </h1>
            </div>
            <div className={styles['speakers-container']}>
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
        </div>
        <div
          className={` ${styles['numbers-banner']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['container2']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['heading-container1']}>
              <span className={styles['text15']}>
                Our 12-year conference history in sharing digital marketing
                insights
              </span>
              <h1
                className={` ${styles['text16']} ${projectStyles['heading2']} `}
              >
                <span>market1 SUMMIT IN NUMBERS</span>
              </h1>
            </div>
            <div className={styles['numbers-container']}>
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
        </div>
        <div className={styles['location']}>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1564347288827-3e4293543e07?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxiZXJsaW58ZW58MHx8fHwxNjQzNzEzNjQ5&amp;ixlib=rb-1.2.1&amp;w=1500"
            className={styles['image6']}
          />
          <div
            className={` ${styles['content-container1']} ${projectStyles['section-container']} `}
          >
            <div className={styles['container3']}>
              <span className={styles['text18']}>berlin, germany</span>
              <span className={styles['text19']}>7-8 MARCH 2023</span>
              <div className={styles['container4']}>
                <span className={styles['text20']}>
                  <span>— mob-x</span>
                </span>
                <span className={styles['text22']}>
                  <span>conference</span>
                </span>
                <span className={styles['text24']}>
                  <span>center</span>
                </span>
              </div>
              <div className={styles['container5']}>
                <span className={styles['text26']}>
                  beautiful, vibrant berlin
                </span>
                <span className={styles['text27']}>
                  <span>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </span>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span>
                    Lorem Ipsum, Velit officia consequat duis enim velit mollit.
                    Exercitation veniam consequat sunt nostrud amet.
                  </span>
                </span>
                <div className={styles['btns-container1']}>
                  <button
                    className={` ${projectStyles['button-secondary']} ${projectStyles['button']} ${projectStyles['button-md']} `}
                  >
                    register
                  </button>
                  <button
                    className={` ${styles['learn-more']} ${projectStyles['button']} ${projectStyles['button-outline']} ${projectStyles['button-md-border']} `}
                  >
                    learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={` ${styles['agenda']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width3']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['heading-container2']}>
              <h1
                className={` ${styles['text31']} ${projectStyles['heading2']} `}
              >
                <span>key events agenda</span>
              </h1>
              <span className={styles['text33']}>
                more announcements are coming soon
              </span>
            </div>
            <div className={styles['events-container']}>
              <div className={styles['column']}>
                <div className={styles['column-header']}>
                  <span className={styles['text34']}>
                    <span>tuesday - 7.03</span>
                  </span>
                  <div className={styles['line']}></div>
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
              <div className={styles['column1']}>
                <div className={styles['column-header1']}>
                  <span className={styles['text36']}>
                    <span>wednesday - 8.03</span>
                  </span>
                  <div className={styles['line1']}></div>
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
        </div>
        <div className={styles['workshops']}>
          <div className={styles['content-container2']}>
            <div className={styles['container6']}>
              <h1
                className={` ${styles['text38']} ${projectStyles['heading2']} `}
              >
                <span>
                  register for
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span className={styles['text41']}>super insightful</span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  workshops for
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>your team</span>
              </h1>
              <span className={styles['text47']}>
                get early discounts and group discounts
              </span>
              <span className={styles['text48']}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </span>
              <button
                className={` ${projectStyles['button']} ${projectStyles['button-md']} ${projectStyles['button-outline']} `}
              >
                learn more
              </button>
            </div>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxidXNpbmVzc3xlbnwwfHx8fDE2NDM3MzQ3MjI&amp;ixlib=rb-1.2.1&amp;w=1500"
            className={styles['image7']}
          />
        </div>
        <div
          className={` ${styles['previous-events']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width4']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['heading-container3']}>
              <h1
                className={` ${styles['text49']} ${projectStyles['heading2']} `}
              >
                <span>previous events</span>
              </h1>
              <span className={styles['text51']}>
                Take a tour of our previous conferences
              </span>
            </div>
          </div>
          <div data-type="slider" className={styles['slider']}>
            <Slide rootClassName="root-class-name4"></Slide>
            <Slide heading="Slide #2" rootClassName="root-class-name1"></Slide>
            <Slide heading="Slide #3" rootClassName="root-class-name"></Slide>
            <Slide heading="Slide #4" rootClassName="root-class-name3"></Slide>
            <Slide heading="Slide #5" rootClassName="root-class-name2"></Slide>
          </div>
          <div className={styles['slider-controls']}>
            <div data-action="previousSlide" className={styles['go-left']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
              </svg>
            </div>
            <div data-action="nextSlide" className={styles['go-right']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon2']}>
                <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
              </svg>
            </div>
          </div>
        </div>
      </main>
      <Footer rootClassName="root-class-name"></Footer>
    </div>
  )
}

export default Home
