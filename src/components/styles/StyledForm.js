import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: center;
  gap: ${({ theme }) => theme.sizes.mediumSize};
  margin: 5%;

  @media (max-width: 650px) {
    margin: 10%;
  }
`;

export default StyledForm;
