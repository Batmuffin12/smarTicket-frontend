import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  padding: ${({ theme }) => theme.sizes.mainPadding};
  flex-flow: row wrap;
  justify-content: center;
  background-image: -webkit-linear-gradient(
    right,
    ${({ theme }) => theme.colors.secondaryBackground},
    ${({ theme }) => theme.colors.main},
    ${({ theme }) => theme.colors.secondaryBackground}
  );
  gap: ${({ theme }) => theme.sizes.itemMargin};
  margin: 0px;
  height: ${({ theme }) => theme.sizes.headerHeight};
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.35);
  text-transform: uppercase;
  overflow: hidden;
`;

export default StyledHeader;
