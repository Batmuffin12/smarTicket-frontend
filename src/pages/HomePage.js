import StyledButton from "components/styles/StyledButton";
import StyledH1 from "components/styles/StyledH1";
import StyledImg from "components/styles/StyledImg";
import StyledLink from "components/styles/StyledLink";
import { useActions } from "hooks/useAction";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import actions from "store/actions";
import logo from "../logo512.png";

const componentActions = {
  getTrains: actions.getTrains,
};

const selectors = (state) => ({
  trains: state.Trains.data,
  trainsLoading: state.Trains.loading,
});

const HomePage = () => {
  const { getTrains } = useActions(componentActions);
  const { trains, trainsLoading } = useSelector(selectors);

  console.log(trains);

  useEffect(() => {
    getTrains();
  }, []);

  return (
    <>
      {trainsLoading && <div>LOADING...</div>}
      <StyledH1 text="Welcome to SmarTicket" />
      <StyledImg src={logo} alt="this is the photo alt" size="mediumImgScale" />
      <br />
      <StyledButton>
        <StyledLink to="/explainPage">So what are we doing?</StyledLink>
      </StyledButton>
    </>
  );
};

export default HomePage;
