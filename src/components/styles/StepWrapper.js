import styled from "styled-components";

const StepWrapper = styled.div`
  margin: auto 20px;
  box-shadow: 3px 3px 3px 3px ${({ theme }) => theme.colors.mainHover};
  transition: all 2s;
  padding: ${({ theme }) => theme.sizes.mediumSize};

  :hover {
    box-shadow: 3px 3px 3px 3px ${({ theme }) => theme.colors.secondary};
  }
`;

export default StepWrapper;
