import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 63%;
  justify-items: center;
  margin: ${({ theme }) => theme.sizes.largeSize} auto;
  justify-content: space-evenly;
`;

export default StyledForm;
