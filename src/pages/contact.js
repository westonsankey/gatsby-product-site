import React, { useState } from "react";
import Layout from "../components/Layout";
import {
  contactBody,
  header,
  headerBlurb,
  formContainer,
  inputContainer,
  inputCenterContainer,
  inputElementSm,
  inputElementLg,
  formInput,
  formInputSm,
  formInputMd,
  inputLabel,
  formSubmitBtn,
  btnContainer,
  formSubmittedBody,
  formSubmittedHeader,
  formSubmittedText,
} from "./ContactForm.module.css";

const ContactFormSubmitted = () => {
  return (
    <div className={formSubmittedBody}>
      <h2 className={formSubmittedHeader}>Success!</h2>
      <p className={formSubmittedText}>Be on the lookout for updates!</p>
    </div>
  );
};

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (formSubmitted) {
    return (
      <Layout>
        <ContactFormSubmitted />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={contactBody}>
        <header>
          <h1 className={header}>Join the Waitlist</h1>
          <p className={headerBlurb}>
            Be the first to hear about the latest product news and updates. By
            joining the waitlist, you'll be first in line to order the Apollo
            Headphones once they are released!
          </p>
        </header>

        <div className={formContainer}>
          <form onSubmit={() => setFormSubmitted(true)}>
            <div className={inputCenterContainer}>
              <div className={inputContainer}>
                <div className={inputElementSm}>
                  <p className={inputLabel}>First Name</p>
                  <input
                    className={`${formInput} ${formInputSm}`}
                    type="text"
                    name="firstName"
                  />
                </div>

                <div className={inputElementSm}>
                  <p className={inputLabel}>Last Name</p>
                  <input
                    className={`${formInput} ${formInputSm}`}
                    type="text"
                    name="firstName"
                  />
                </div>
              </div>
            </div>

            <div className={inputCenterContainer}>
              <div className={inputContainer}>
                <div className={inputElementLg}>
                  <p className={inputLabel}>Email</p>
                  <input
                    className={`${formInput} ${formInputMd}`}
                    type="email"
                    name="email"
                  />
                </div>
              </div>
            </div>
            <div className={btnContainer}>
              <button className={formSubmitBtn} type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ContactForm;
