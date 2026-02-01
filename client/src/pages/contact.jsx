import React from "react";
import styled from "styled-components";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";

/* ---------------- PAGE WRAPPER ---------------- */
const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 40px 20px;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* ---------------- MAIN CONTAINER ---------------- */
const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  background: #fff;
  padding: 40px;
  border-radius: 18px;
  box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.12);
`;

/* ---------------- TITLE ---------------- */
const Title = styled.h1`
  text-align: center;
  font-size: 38px;
  font-weight: 800;
  color: #104ac6;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 18px;
  color: #555;
  margin-bottom: 40px;
`;

/* ---------------- GRID ---------------- */
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 35px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

/* ---------------- CONTACT INFO ---------------- */
const InfoCard = styled.div`
  padding: 25px;
  border-radius: 12px;
  background: #eef3ff;
  border-left: 5px solid #104ac6;
`;

const InfoHeading = styled.h2`
  color: #104ac6;
  font-size: 26px;
  margin-bottom: 20px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  font-size: 18px;
  color: #444;
  gap: 12px;

  svg {
    color: #104ac6;
    font-size: 20px;
  }
`;

/* ---------------- SOCIAL ICONS ---------------- */
const SocialIcons = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 20px;

  a {
    font-size: 26px;
    color: #104ac6;
    cursor: pointer;
    transition: 0.2s ease;
  }

  a:hover {
    transform: scale(1.15);
    color: #062c88;
  }
`;

/* ---------------- FORM ---------------- */
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 14px;
  font-size: 16px;
  border-radius: 10px;
  border: 1.5px solid #ccc;
  outline: none;
  transition: 0.25s;

  &:focus {
    border-color: #104ac6;
    box-shadow: 0px 0px 8px rgba(16, 74, 198, 0.3);
  }
`;

const TextArea = styled.textarea`
  padding: 14px;
  font-size: 16px;
  border-radius: 10px;
  border: 1.5px solid #ccc;
  min-height: 120px;
  outline: none;
  transition: 0.25s;

  &:focus {
    border-color: #104ac6;
    box-shadow: 0px 0px 8px rgba(16, 74, 198, 0.3);
  }
`;

const SubmitButton = styled.button`
  width: 180px;
  padding: 14px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  background: #104ac6;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 10px;
  transition: 0.2s ease-in-out;

  &:hover {
    background: #062c88;
    transform: translateY(-2px);
  }
`;

/* ---------------- POPUP MESSAGE ---------------- */
const Popup = styled.div`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: #28a745;
  padding: 14px 26px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border-radius: 12px;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.2);
  animation: fadeInOut 2.5s ease forwards;
  z-index: 10000;

  @keyframes fadeInOut {
    0% { opacity: 0; transform: translate(-50%, 20px); }
    10% { opacity: 1; transform: translate(-50%, 0); }
    90% { opacity: 1; transform: translate(-50%, 0); }
    100% { opacity: 0; transform: translate(-50%, 20px); }
  }
`;

/* ---------------- MAIN COMPONENT ---------------- */
const Contact = () => {
  const [showPopup, setShowPopup] = React.useState(false);
  const formRef = React.useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    formRef.current.reset();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2500);
  };

  return (
    <>
      <PageWrapper>
        <Container>
          <Title>Contact Us</Title>
          <Subtitle>
            Have questions, need help, or want to collaborate?
            We're here to assist you with anything related to FitXHub.
          </Subtitle>

          <Grid>

            {/* LEFT SECTION */}
            <InfoCard>
              <InfoHeading>📞 Contact Information</InfoHeading>

              <InfoItem>
                <FaPhoneAlt /> +91 9634387263
              </InfoItem>

              <InfoItem>
                <FaEnvelope /> support@fitxhub.com
              </InfoItem>

              <InfoItem>
                <FaMapMarkerAlt /> Mathura, Uttar Pradesh, India
              </InfoItem>

              <SocialIcons>
               

                <a
                  href="https://www.instagram.com/fitxhub"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.youtube.com/@fitxengineer"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.facebook.com/fitxengineer"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
              </SocialIcons>
            </InfoCard>

            {/* RIGHT SECTION - FORM */}
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input type="text" placeholder="Your Full Name" required />
              <Input type="email" placeholder="Your Email Address" required />
              <Input type="number" placeholder="Your Phone Number" required />
              <TextArea placeholder="Write your message here..." required />
              <SubmitButton type="submit">Send Message</SubmitButton>
            </Form>

          </Grid>
        </Container>
      </PageWrapper>

      {showPopup && <Popup>✔ Message Sent Successfully!</Popup>}
    </>
  );
};

export default Contact;
