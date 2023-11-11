import React from "react";

import "./Pricing.css";
import check from "../Assets/check-mark-svgrepo-com.svg";

export default function Pricing() {
  return (
    <div className="pricingContainer">
      <div className="pricingheader">
        <h2 className="pricingTitle">
          Clear and transparent pricing to fulfill all your business
          requirements.
        </h2>
        <h3>
          Unlock cost-effective solutions for Streamlined Document Management
        </h3>
      </div>
      <div className="pricing-grid">
        <div className="pricing-option">
          <h2>Monthly Essentials</h2>
          <p>Flexible monthly payments</p>
          <div className="pricingContainerNumber">
            <h3>$7.99</h3>
            <div className="currency">
              <p>USD</p>
              <p>user / month</p>
            </div>
          </div>
          <hr />
          <ul class="checkmark-list">
            <li>
              <div className="checkmarkContainer">
                <img src={check} alt="" className="checkmark" />
              </div>
              <p>
                Text Extraction: Ability to extract text from scanned or
                image-based documents.
              </p>
            </li>
            <li>
              <div className="checkmarkContainer">
                <img src={check} alt="" className="checkmark" />
              </div>
              <p>
                Document Format Support: Support for common document formats,
                such as PDF, JPEG, TIFF, and more.
              </p>
            </li>
            <li>
              <div className="checkmarkContainer">
                <img src={check} alt="" className="checkmark" />
              </div>
              <p>
                Basic Search: Basic text-based search functionality within OCR'd
                documents.
              </p>
            </li>
            <li>
              <div className="checkmarkContainer">
                <img src={check} alt="" className="checkmark" />
              </div>
              <p>ORC Accuracy: High accuracy in text recognition.</p>
            </li>

            <li>
              <div className="checkmarkContainer">
                <img src={check} alt="" className="checkmark" />
              </div>
              <p>
                Bulk Upload: Capability to upload and process multiple documents
                at once.
              </p>
            </li>
            <li>
              <div className="checkmarkContainer">
                <img src={check} alt="" className="checkmark" />
              </div>
              <p>
                Cloud Storage Integration: Integration with cloud storage
                services like Google Drive or Dropbox.
              </p>
            </li>
            <li>
              <div className="checkmarkContainer">
                <img src={check} alt="" className="checkmark" />
              </div>
              <p>Mobile Access: Access to OCR services via mobile apps.</p>
            </li>
          </ul>
          <button>Get Started</button>
        </div>
        <div className="pricing-option">
          <h2>Annual Advantage</h2>
          <p>Pay once a year and save!</p>
          <div className="pricingContainerNumber">
            <h3>$4.99</h3>
            <div className="currency">
              <p>USD</p>
              <p>user / month</p>
            </div>
          </div>
          <hr />

          <ul class="checkmark-list">
            <li>
              <div className="checkmarkContainer">
                <img src={check} alt="" className="checkmark" />
              </div>
              <p>
                Text Extraction: Ability to extract text from scanned or
                image-based documents.
              </p>
            </li>
            <li>
              <div className="checkmarkContainer">
                <img src={check} alt="" className="checkmark" />
              </div>
              <p>
                Document Format Support: Support for common document formats,
                such as PDF, JPEG, TIFF, and more.
              </p>
            </li>
            <li>
              <div className="checkmarkContainer">
                <img src={check} alt="" className="checkmark" />
              </div>
              <p>
                Basic Search: Basic text-based search functionality within OCR'd
                documents.
              </p>
            </li>
            <li>
              <div className="checkmarkContainer">
                <img src={check} alt="" className="checkmark" />
              </div>
              <p>ORC Accuracy: High accuracy in text recognition.</p>
            </li>

            <li>
              <div className="checkmarkContainer">
                <img src={check} alt="" className="checkmark" />
              </div>
              <p>
                Bulk Upload: Capability to upload and process multiple documents
                at once.
              </p>
            </li>
            <li>
              <div className="checkmarkContainer">
                <img src={check} alt="" className="checkmark" />
              </div>
              <p>
                Cloud Storage Integration: Integration with cloud storage
                services like Google Drive or Dropbox.
              </p>
            </li>
            <li>
              <div className="checkmarkContainer">
                <img src={check} alt="" className="checkmark" />
              </div>
              <p>Mobile Access: Access to OCR services via mobile apps.</p>
            </li>
          </ul>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}
