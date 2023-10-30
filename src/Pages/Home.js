import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPiggyBank,
  faBriefcase,
  faShield,
  faArrowUpRightDots,
} from "@fortawesome/free-solid-svg-icons";
import clio from "../Assets/Clio.png";

export default function Home() {
  return (
    <div>
      <div className="mainHeroContainerBackground">
        <div className="mainHeroContainer">
          <div className="mainHero">
            <h1>
              Elevate your <br />
              daily legal <br />
              experience
            </h1>
            <h4>Transforming Legal Documents with OCR Expertise</h4>
            <div className="form-container">
              <form action="" method="">
                <label for="email"></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
                <input type="submit" value="Submit" id="submit" />
              </form>
            </div>
          </div>
          <div className="rightSideHero">
            <div className="imageContainerMain">
              <img src={clio} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mainContent">
        <h2>Prioritize client needs, with technology that exceeds.</h2>
        <div className="listofBenefits">
          <ul>
            <li>
              <FontAwesomeIcon icon={faPiggyBank} className="money icon" />
              <h3>Save time and money</h3>
              <p>
                Do away with busy work and focus more on giving exceptional
                client experiences.
              </p>
            </li>
            <li>
              <FontAwesomeIcon icon={faBriefcase} className="work icon" />
              <h3>Better client experience</h3>
              <p>
                Move your cases through faster by having automations do your
                work and client communications.
              </p>
            </li>
            <li>
              <FontAwesomeIcon icon={faShield} className="shield icon" />
              <h3>Eliminate human error</h3>
              <p>
                No more human errors in data entry or client communications. Let
                the machines handle that.
              </p>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faArrowUpRightDots}
                className="growth icon"
              />
              <h3>Grow your profits</h3>
              <p>
                Grow your revenue but not your expenses. LegalMate allows you to
                do more cases with less time.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
