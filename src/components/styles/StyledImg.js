import styled from "styled-components";
import Img from "../uiKit/Img";

const StyledImg = styled(Img)`
  size: ${({ theme }) => theme.sizes.smallSize};
  border-radius: ${({ theme }) => theme.sizes.mediumSize};
  border: 1px solid;
  border-radius: 90%;
`;

export default StyledImg;
