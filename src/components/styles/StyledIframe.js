import styled from "styled-components";
import Iframe from "components/uiKit/Iframe";

const StyledIframe = styled(Iframe)`
  border: none;
  margin: ${({ theme }) => theme.sizes.mediumSize};
  border-radius: 10px;
`;

export default StyledIframe;
