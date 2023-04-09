const { default: StyledH1 } = require("./styles/StyledH1");
const { default: StyledP } = require("./styles/StyledP");

const HomePageText = () => (
  <>
    <StyledH1>An easy way to hop on the train!</StyledH1>
    <StyledP opacity={0.7}>Takes no time at the train station.</StyledP>
    <StyledP opacity={0.7}>Automated by face recognition!</StyledP>
    <StyledP opacity={0.7}>Easy to use.</StyledP>
  </>
);
export default HomePageText;
