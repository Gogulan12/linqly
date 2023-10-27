import React from "react";
import "./Clio.css";

export default function Clio() {
  return (
    <div className="clioHeroContainer">
      <div className="clioHero">
        <h1>OCR any document automatically inside Clio.</h1>
      </div>
      <div className="clioStep">
        <h2>Document OCR Process</h2>

        {/* <ul>
          <li>
            <strong>Document Collection</strong>
            <br />
            Begin by collecting all relevant physical and digital documents that
            need to be converted into machine-readable text.
          </li>

          <li>
            <strong>Document Preparation</strong>
            <br />
            Organize and prepare the documents for scanning or digital
            conversion. Remove any staples, paperclips, or bindings that may
            hinder the process.
          </li>

          <li>
            <strong>Scanning</strong>
            <br />
            Use high-quality scanning equipment to digitize physical documents.
            Ensure that the scanner settings are optimized for OCR, such as
            setting a high resolution and using a format like PDF.
          </li>

          <li>
            <strong>OCR Software</strong>
            <br />
            Utilize advanced Optical Character Recognition (OCR) software or
            tools to convert the scanned images into searchable and editable
            text. Make sure the software supports legal terminology and document
            formatting.
          </li>

          <li>
            <strong>Document Verification</strong>
            <br />
            Review the output of the OCR software to verify accuracy. Correct
            any errors or formatting issues as necessary. This step is crucial
            to ensure the integrity of the text.
          </li>

          <li>
            <strong>File Organization</strong>
            <br />
            Organize the digitized documents in a structured and intuitive
            manner. Create folders or categories that align with your law firm's
            document management system for easy access.
          </li>

          <li>
            <strong>Metadata Tagging</strong>
            <br />
            Add relevant metadata to each document. This can include information
            like document titles, dates, authors, and case numbers to enhance
            search capabilities.
          </li>

          <li>
            <strong>Searchable Database</strong>
            <br />
            Integrate the OCR-processed documents into a searchable database,
            making it easy for your legal team to find and access information
            swiftly. Implement a user-friendly search interface.
          </li>

          <li>
            <strong>Backup and Security</strong>
            <br />
            Implement robust data backup and security measures to protect
            sensitive legal information. Ensure that only authorized personnel
            can access the documents.
          </li>

          <li>
            <strong>Quality Control</strong>
            <br />
            Continuously monitor the OCR process for accuracy and efficiency.
            Regularly update the database to include new documents and
            revisions.
          </li>

          <li>
            <strong>Client Access</strong>
            <br />
            Offer your clients secure access to the digitized documents through
            a secure online portal or document management system, allowing them
            to review and collaborate on cases more effectively.
          </li>

          <li>
            <strong>Training and Support</strong>
            <br />
            Provide training and support to your legal team and clients,
            ensuring they are proficient in using the digitized document system.
          </li>

          <li>
            <strong>Compliance and Regulations</strong>
            <br />
            Stay informed about legal compliance and data protection regulations
            relevant to document digitization, ensuring that your firm adheres
            to all necessary standards.
          </li>

          <li>
            <strong>Continuous Improvement</strong>
            <br />
            Continuously seek ways to enhance the OCR process and document
            management to better serve your clients and improve operational
            efficiency.
          </li>
        </ul> */}
        <ul>
          <li>
            <h3>1. Document Collection</h3>
            <p>
              Begin by collecting all relevant physical and digital documents
              that need to be converted into machine-readable text. Organize and
              prepare the documents for scanning or digital conversion by
              removing any staples, paperclips, or bindings that may hinder the
              process.
            </p>
          </li>

          <li>
            <h3>2. Scanning and OCR Software</h3>
            <p>
              Use high-quality scanning equipment to digitize physical
              documents. Ensure that the scanner settings are optimized for OCR,
              such as setting a high resolution and using a format like PDF.
              Utilize advanced Optical Character Recognition (OCR) software to
              convert the scanned images into searchable and editable text,
              ensuring it supports legal terminology and document formatting.
            </p>
          </li>
          <li>
            <h3>3. Document Organization and Security</h3>
            <p>
              Review the output of the OCR software to verify accuracy and
              correct any errors or formatting issues. Organize the digitized
              documents in a structured and intuitive manner, adding relevant
              metadata to enhance search capabilities. Integrate the
              OCR-processed documents into a searchable database and implement
              robust data backup and security measures to protect sensitive
              legal information.
            </p>
          </li>
          <li>
            <h3>
              4. Quality Control, Client Access, and Continuous Improvement
            </h3>
            <p>
              Continuously monitor the OCR process for accuracy and efficiency.
              Provide secure access to clients through an online portal,
              allowing them to review and collaborate on cases. Additionally,
              offer training and support to your legal team and clients. Stay
              informed about legal compliance and data protection regulations
              relevant to document digitization and continuously seek ways to
              enhance the OCR process for better service and operational
              efficiency.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
