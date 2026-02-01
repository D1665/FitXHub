import React from "react";
import styled from "styled-components";

// Page Background Wrapper (UPDATED TO PURE WHITE)
const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 40px 20px;
  box-sizing: border-box;
  background: #ffffff;  // WHITE BACKGROUND FOR ALL PAGES
`;

// Section Title
const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #0d47a1;
  margin: 50px 0 25px 0;
  text-align: center;
`;

// Grid
const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 35px;
  margin-bottom: 50px;
`;

// Cards
const VideoCard = styled.div`
  background: #ffffff;
  border-radius: 14px;
  padding: 12px;
  border: 1px solid #d9e3f1;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 32px rgba(0, 0, 0, 0.18);
  }
`;

// Iframe
const StyledIframe = styled.iframe`
  width: 100%;
  height: 220px;
  border-radius: 12px;
  border: none;

  @media (max-width: 768px) {
    height: 230px;
  }
  @media (max-width: 480px) {
    height: 200px;
  }
`;

const Tutorials = () => {
  return (
    <PageWrapper>

      {/* Chest */}
      <SectionTitle>Chest Exercise Tutorials</SectionTitle>
      <VideoGrid>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/4Y2ZdHCOXok" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/IP4oeKh1Sd4?si=QgC5-xNcv7WMZUcJ" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/JUDTGZh4rhg?si=SXvsbOq1R-EAbnbg" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/H4mVGHaK2f4?si=sRcWNoMJgbl27P9J" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/ZyjQar-XgBc?si=WHHBLDSGHkSOI85X" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe  src="https://www.youtube.com/embed/mtX-B5gbgmM?si=PFkbuJHIut1u6whH" allowFullScreen /></VideoCard>

      </VideoGrid>

      {/* Triceps */}
      <SectionTitle>Triceps Exercise Tutorials</SectionTitle>
      <VideoGrid>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/gsuW1bJc-Gk?si=HDx8lenfCrWzW6Vr" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/_w-HpW70nSQ?si=R4WlJnyPGuqAtu8g" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/yftl1tBWmKk?si=yNyfN8H7NP9PBA8_" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/SuajkDYlIRw?si=crOLGQzObscCQwfX" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe  src="https://www.youtube.com/embed/OpRMRhr0Ycc?si=iI0t0alrD-ZJV2hi" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/tmgfpdpQ5sk?si=-ky2sDFq8s0RNLnY" allowFullScreen /></VideoCard>

      </VideoGrid>

      {/* Back */}
      <SectionTitle>Back Exercise Tutorials</SectionTitle>
      <VideoGrid>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/XxWcirHIwVo?si=SojvKRCAzMDaY9CQ" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/MDg0xyAJnIc?si=chijYaA-komdWOhK" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/-KsLda8OhH0?si=gEdAmFjgv9HDHym5" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/7BkgqzC6WsM?si=LUqWpTem1zTp7J0n" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/aJ1aGlWQHJ4?si=3x0luDECiAqefOAE" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/Sa0sBKUiOvU?si=m1AByJyBV3hNXmbS" allowFullScreen /></VideoCard>

      </VideoGrid>

      {/* Biceps */}
      <SectionTitle>Biceps Exercise Tutorials</SectionTitle>
      <VideoGrid>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/BRVDS6HVR9Q?si=WzKZRlv_GH-lGlws" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/Gydpcouclx8?si=EcyXyOrcHxyIegXj" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/QZEqB6wUPxQ?si=m00PpG51VJNyw2C7" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/Jvj2wV0vOYU?si=mWp3qEJi7lnTvxGN" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/fnXMvxrtS94?si=SHYScl7JdO1qxsZV" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/WvlDMlMx1Ok?si=DDA473XZ69mys87N" allowFullScreen /></VideoCard>

      </VideoGrid>

      {/* Shoulder */}
      <SectionTitle>Shoulder Exercise Tutorials</SectionTitle>
      <VideoGrid>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/GFblCmuEE18?si=IOye27ZJNXNhMeu6" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/-hyAJdSFzT4?si=WbFOOboF5YHytSj8" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/buuYPLVXsJg?si=C3EGRdA_j5qdDCE0" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/Jvj2wV0vOYU?si=mWp3qEJi7lnTvxGN" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/21lYP86dHW4?si=3zpm0rd-kvmwN_xv" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/jYfqYwrC5L4?si=Z1qOJCFmc4w2Iixj" allowFullScreen /></VideoCard>

      </VideoGrid>

      {/* Legs */}
      <SectionTitle>Legs Exercise Tutorials</SectionTitle>
      <VideoGrid>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/INNtN1cMG9A?si=3y6rO-i3GJnTbAF4" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/K5n2vg3oZa4?si=HKuoCMcyegI1blmw" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/ljO4jkwv8wQ?si=X-pRMSpbrS9Z3rHY" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/6O5hh1rBtx8?si=mVfrW7QgrSlprM8-" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe  src="https://www.youtube.com/embed/8zWDuWKdBZU?si=3TQKGav32YcejYpa" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/QXtXEug0PLU?si=OEuME8f_JZlXxnaZ" allowFullScreen /></VideoCard>

      </VideoGrid>

      {/* Abs */}
      <SectionTitle>Abs Exercise Tutorials</SectionTitle>
      <VideoGrid>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/A2b2EmIg0dA?si=1Ywu196BXHXlafKk" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/5ER5Of4MOPI?si=ijmLUuiZPpqMvJe4" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/l4kQd9eWclE?si=l7nb_9K9c2aDJnOO" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/unMZPDjMn10?si=xNMdntND6bAUQVLZ" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/Tn-XvYG9x7w?si=UN5cNFg3Kwrq6uZL" allowFullScreen /></VideoCard>
        <VideoCard><StyledIframe src="https://www.youtube.com/embed/8D_ItZBvbmk?si=-UVWhiPU-oIAxOoG" allowFullScreen /></VideoCard>

      </VideoGrid>

    </PageWrapper>
  );
};

export default Tutorials;
