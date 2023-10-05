import React from "react";
import "./About.css";

export default function About() {
  return (
    <div>
      <div className="informationContainer">
        <header className="aboutUsTitle">
          <h1>About Us</h1>
        </header>
        <section id="team" className="aboutNotes">
          <h2>Our Team</h2>
          <p>
            Behind Linqly stands a dedicated team of visionary software
            developers, technologists, and automation specialists. Together, we
            are committed to leveraging cutting-edge technology to transform the
            legal industry. With a wealth of experience and a deep understanding
            of the legal landscape, our experts collaborate to craft tailored
            solutions that meet the unique needs of our clients.
          </p>
        </section>
        <section id="vision" className="aboutNotes">
          <h2>Our Vision</h2>
          <p>
            We firmly believe that technology holds the key to simplifying and
            automating complex legal processes. By harnessing the power of
            innovation, we empower our clients to reclaim valuable time and
            resources, allowing them to focus on delivering top-quality legal
            services to their clients. At Linqly, we understand that every law
            firm is distinct, and our dedication to customized solutions ensures
            that we adapt to the evolving demands of the legal profession.
          </p>
        </section>
        <section id="success" className="aboutNotes">
          <h2>Your Success, Our Priority</h2>
          <p>
            Whether you are a solo practitioner or part of a large,
            multi-location law firm with diverse practice areas, Linqly is here
            to optimize your legal document management. Our comprehensive suite
            of services and tools is designed to support your success in a
            digital world.
          </p>
        </section>
      </div>
    </div>
  );
}
