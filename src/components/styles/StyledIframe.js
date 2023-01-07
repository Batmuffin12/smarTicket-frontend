import styled from "styled-components";
import Iframe from "../uiKit/Iframe";

const StyledIframe = styled(Iframe)`
  border: none;
  border-radius: 5px;
  padding: ${({ theme }) => theme.sizes.mediumSize};
`;

export default StyledIframe;
