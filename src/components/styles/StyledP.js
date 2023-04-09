import styled from "styled-components";

const StyledP = styled.p`
  color: ${({ theme }) => theme.colors.text};
  text-align: ${({ textAlign }) => textAlign || "center"};
  opacity: ${({ opacity }) => opacity || 1};
`;

export default StyledP;
