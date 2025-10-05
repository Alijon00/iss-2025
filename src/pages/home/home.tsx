import "./home.css";
import { Header } from "../../components/header";
import { useState } from "react";
import { ContactModal } from "../../components/modal/contactModal";
import { QuizModal } from "../../components/modal/quizModal";

export const Home = () => {
  const [showContact, setShowContact] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <main>
      <Header />
      <div className="homeContainer">
        <div className="infoContain">
          <div className="leftInfoContain">
            <div className="designerName">
              <p>International Space Station</p>
            </div>
            <div className="designerProduct">
              <p>A hub for science, research & human spaceflight.</p>
            </div>
            
          </div>

          <div className="rightInfoContain">
            <div className="bigLorem">
              <p>
                MISSION <br /> Science, technology & international cooperation
              </p>
            </div>

            <div className="designerInfoContain">
              <div className="designerInfoPart">
                <p className="aboutText">IN ORBIT SINCE</p>
                <p>1998 / 20 November </p>
              </div>

              <div className="designerInfoPart">
                <p className="aboutText">CREW EXPERIENCE</p>
                <p>240+ astronauts from 19 countries</p>
              </div>

              <div className="designerInfoPart">
                <p className="aboutText">BUILT BY</p>
                <p>NASA, Roscosmos, ESA, JAXA, CSA</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="achivementsContain">
          <div className="squares">
            <p>100+</p>
            <p className="aboutAchievements">Science Modules & Experiments</p>
          </div>
          <div className="squares">
            <p>20+</p>
            <p className="aboutAchievements">Years in Orbit</p>
          </div>
          <div className="squares">
            <p>250+</p>
            <p className="aboutAchievements">Astronauts Visited</p>
          </div>
        </div>

        {/* Модалки */}
        <ContactModal 
          isOpen={showContact} 
          onClose={() => setShowContact(false)} 
        />
        
        <QuizModal 
          isOpen={showQuiz} 
          onClose={() => setShowQuiz(false)} 
        />
      </div>
    </main>
  );
};