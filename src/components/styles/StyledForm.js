import styled from "styled-components";

// fixme for the pages to look better
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-items: center;
  margin: ${({ theme }) => theme.sizes.largeSize} auto;
  justify-content: space-evenly;
`;

export default StyledForm;
