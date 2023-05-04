import React from "react";
import trainStationImage1 from "../galleyImages/trainStation1.png";
import trainStationImage2 from "../galleyImages/trainStation2.png";
import trainStationImage3 from "../galleyImages/trainStation3.png";
import trainStationImage4 from "../galleyImages/trainStation4.png";
import trainStationImage5 from "../galleyImages/trainStation5.png";
import StyledImg from "components/styles/StyledImg";
import styled from "styled-components";

const GalleryPageWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-wrap: wrap;
`;

const FirstImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: auto;
`;

const SecondImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
`;
const ThirdImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
  height: 100%;
`;
const GalleryPage = () => {
  return (
    <GalleryPageWrapper>
      <FirstImageWrapper>
        <StyledImg src={trainStationImage1} height={200} width={200} />
        <StyledImg src={trainStationImage2} height={200} width={200} />
      </FirstImageWrapper>
      <SecondImageWrapper>
        <StyledImg src={trainStationImage3} height={300} width={300} />
      </SecondImageWrapper>
      <ThirdImageWrapper>
        <StyledImg src={trainStationImage4} height={200} width={200} />
        <StyledImg src={trainStationImage5} height={200} width={200} />
      </ThirdImageWrapper>
    </GalleryPageWrapper>
  );
};

export default GalleryPage;
