import styled from "styled-components";

const StyledP = styled.p`
  color: ${({ theme }) => theme.colors.text};
  text-align: ${({ textAlign }) => textAlign || "center"};
`;

export default StyledP;
