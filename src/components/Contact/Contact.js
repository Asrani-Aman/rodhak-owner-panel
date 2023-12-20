import styled from "styled-components";
import "./Contact.css";
import Header from "../Header/Header";
const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 1rem 5rem 1rem;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: #fff;
              border: 1px solid rgb(98 84 243);
              color: rgb(98 84 243);
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Any Query?</h2>
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455641541671!3d18.562061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1664345115285!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27153.87422392971!2d76.92015380426825!3d31.709494753680136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904e238c88ea491%3A0x87e6743a04fb62fe!2sMandi%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1685706158606!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <div className="contact-subheading">
            <span className="stroke-text">FEEL </span>
            <span>FREE</span>
            <span className="stroke-text">TO </span>
            <span>MESSAGE</span>
          </div>
          <form
            action="https://formspree.io/f/xeqdgwnq"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="Enter your name"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Enter Your Email"
              autoComplete="off"
              required
            />

            <input
              type="number"
              name="phoneNumber"
              placeholder="Enter Your Contact Number"
              autoComplete="off"
              required
            />
            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Type Your message  Here"
            ></textarea>

            <input type="submit" value="send" className="btn btn-join" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
