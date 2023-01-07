import styled from "styled-components";

const StyledHr = styled.hr`
  border: 0;
  height: 1px;
  background-image: -webkit-linear-gradient(
    left,
    ${({ theme }) => theme.colors.background},
    ${({ theme }) => theme.colors.mainHover},
    ${({ theme }) => theme.colors.background}
  );
  /* border: 0.5px solid ${({ theme }) => theme.colors.secondary}; */
`;

export default StyledHr;
