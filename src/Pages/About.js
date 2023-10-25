import React from "react";
import "./About.css";

import team from "../Assets/team.jpg";
import group from "../Assets/workingtogether.jpg";

export default function About() {
  return (
    <div>
      <div className="informationContainer">
        <div className="headerContainer">
          <header className="aboutUsTitle">
            <h1>
              Empowering Law Firms with Precision <br />
              OCR Solutions.
            </h1>
          </header>
        </div>
        <div className="contentSectionAbout">
          <div className="subheadingContainer">
            <h2 className="subheadingTitle">
              At Linqly, We OCR Documents So You Can Focus on Law: Effortless
              Document Management for Legal Professionals
            </h2>
            <p className="subheadingText">
              Revolutionize Your Legal Data Management with Linqly's OCR
              Services, Ensuring Your Focus Remains on Practicing Law.
            </p>
          </div>
          <section id="team" className="aboutNotes">
            <div className="teamContent">
              <h2>Our Team</h2>
              <p>
                Behind Linqly stands a dedicated team of visionary software
                developers, technologists, and automation specialists. Together,
                we are committed to leveraging cutting-edge technology to
                transform the legal industry. With a wealth of experience and a
                deep understanding of the legal landscape, our experts
                collaborate to craft tailored solutions that meet the unique
                needs of our clients.
              </p>
            </div>
            <div className="teamImage">
              <img src={team} alt="" />
            </div>
          </section>
          <section id="vision" className="aboutNotes">
            <h2>Our Vision</h2>
            <p>
              We firmly believe that technology holds the key to simplifying and
              automating complex legal processes. By harnessing the power of
              innovation, we empower our clients to reclaim valuable time and
              resources, allowing them to focus on delivering top-quality legal
              services to their clients. At Linqly, we understand that every law
              firm is distinct, and our dedication to customized solutions
              ensures that we adapt to the evolving demands of the legal
              profession.
            </p>
          </section>
          <section id="success" className="aboutNotes">
            <h2>Your Success, Our Priority</h2>
            <p>
              Whether you are a solo practitioner or part of a large,
              multi-location law firm with diverse practice areas, Linqly is
              here to optimize your legal document management. Our comprehensive
              suite of services and tools is designed to support your success in
              a digital world.
            </p>
          </section>
          <div className="groupimagecontainer">
            <img src={group} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
