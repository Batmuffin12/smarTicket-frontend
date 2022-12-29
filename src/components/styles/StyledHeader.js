import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  gap: ${({ theme }) => theme.sizes.itemMargin};
  margin: 0px;
`;

export default StyledHeader;
