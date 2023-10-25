import React from "react";

import "./Contact.css";
import toronto from "../Assets/toronto.jpg";

export default function Contact() {
  return (
    <div>
      <section id="contact">
        <div className="outerContactHeader">
          <div className="contactHeaderContainer">
            <div className="contactText">
              <h2>Contact Us</h2>
              <p>
                At Linqly, we value open communication and are committed to
                providing you with the best possible support and assistance. If
                you have any inquiries, questions, or specific requests, please
                don't hesitate to get in touch with us. Our dedicated team is
                here to help, and we encourage you to reach out to us through
                the various means of communication provided below.
              </p>
            </div>
            <div className="officeImageLocation">
              <img src={toronto} alt="" />
            </div>
          </div>
        </div>

        <div className="ContactContentInfo">
          <div class="contact-info">
            <h3>Customer Support</h3>
            <p>
              Customer satisfaction is our top priority. Our dedicated customer
              support team is available to address your questions, concerns, or
              any issues you may encounter. We're here to assist you promptly
              and professionally. Whether you're seeking information about our
              products or services, need technical support, or have general
              inquiries, don't hesitate to contact us. We are committed to
              providing you with the guidance and support you require.
            </p>
          </div>

          <div class="contact-info">
            <h3>Email</h3>
            <p>
              For written inquiries, email is an excellent option. You can send
              us an email at{" "}
              <a href="mailto:info@linqly.com">info@linqly.com</a>, and we will
              ensure that your message is directed to the right department. Our
              team will make it a priority to address your needs and provide you
              with the information or assistance you're looking for.
            </p>
          </div>

          <div class="contact-info">
            <h3>Phone</h3>
            <p>
              Our customer support team is just a phone call away. You can reach
              us during our operating hours at{" "}
              <a href="tel:+1-123-456-7890">+1 (123) 456-7890</a>. Whether you
              have product-related questions or require assistance with any
              aspect of our services, we are here to provide prompt and helpful
              responses.
            </p>
          </div>

          <div class="contact-info">
            <h3>Social Media</h3>
            <p>
              In addition to our traditional communication channels, you can
              also stay connected with us through our social media platforms. By
              following us on{" "}
              <a
                href="https://www.linkedin.com/company/linqly"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              , you'll have the opportunity to receive updates, engage with our
              community, and stay informed about our latest developments and
              news. We encourage you to become part of our online community and
              connect with us on your preferred social media channels.
            </p>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/company/linqly"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/linqlytech"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/linqly"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          <p>
            We look forward to hearing from you and assisting you on your
            journey to more efficient legal document management with Linqly.
          </p>
        </div>
      </section>
    </div>
  );
}
