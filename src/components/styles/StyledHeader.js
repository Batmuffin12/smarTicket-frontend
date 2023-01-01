import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  padding: ${({ theme }) => theme.sizes.headerPadding};
  flex-flow: row wrap;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.main};
  gap: ${({ theme }) => theme.sizes.itemMargin};
  margin: 0px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
  overflow: hidden;
`;

export default StyledHeader;
