import styled from "styled-components";

const StyledImg = styled.img`
  /* size: ${({ theme }) => theme.size.itemMargin}; */
  border-radius: ${({ theme }) => theme.border.itemMargin};
  border: solid;
`;

export default StyledImg;
