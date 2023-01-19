import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: center;
  gap: ${({ theme }) => theme.sizes.mediumSize};
  margin: ${({ theme }) => theme.sizes.largeSize};
`;

export default StyledForm;
