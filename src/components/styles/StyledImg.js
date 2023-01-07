import styled from "styled-components";
import Img from "../uiKit/Img";

const StyledImg = styled(Img)`
  width: ${({ theme, size }) => theme.sizes[size]};
  border-radius: ${({ theme }) => theme.sizes.mediumSize};
`;

export default StyledImg;
