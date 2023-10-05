import React from "react";

import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <section id="contact">
        <h2>Contact Us</h2>
        <p>
          Have questions or need assistance? Don't hesitate to reach out to us.
          We're here to help you with any inquiries or support you may need.
          Feel free to contact us through any of the following channels:
        </p>

        <div class="contact-info">
          <h3>Our Office</h3>
          <address>
            <p>123 LegalTech Lane</p>
            <p>Suite 456</p>
            <p>Techville, CA 12345</p>
          </address>
        </div>

        <div class="contact-info">
          <h3>Email</h3>
          <p>
            <a href="mailto:info@linqly.com">info@linqly.com</a>
          </p>
        </div>

        <div class="contact-info">
          <h3>Phone</h3>
          <p>
            <a href="tel:+1-123-456-7890">+1 (123) 456-7890</a>
          </p>
        </div>

        <div class="contact-info">
          <h3>Social Media</h3>
          <ul>
            <li>
              <a href="https://www.linkedin.com/company/linqly" target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://twitter.com/linqlytech" target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/linqly" target="_blank">
                Facebook
              </a>
            </li>
          </ul>
        </div>

        <p>
          We look forward to hearing from you and assisting you on your journey
          to more efficient legal document management with Linqly.
        </p>
      </section>
    </div>
  );
}
