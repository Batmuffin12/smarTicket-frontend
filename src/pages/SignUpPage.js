import SignUpModal from "components/SignUpModal";
import StyledModal from "components/styles/StyledModal";
import StyledModalPageWrapper from "components/styles/StyledModalPageWrapper";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const selectors = (state) => ({
  currentUser: state.currentUser?.data,
});

const SignUpPage = () => {
  const { currentUser } = useSelector(selectors);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, navigate]);

  return (
    <StyledModalPageWrapper>
      <StyledModal isOpen={true}>
        <SignUpModal />
      </StyledModal>
    </StyledModalPageWrapper>
  );
};

export default SignUpPage;
