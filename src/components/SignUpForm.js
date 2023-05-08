import { useActions } from "hooks/useAction";
import actions from "store/actions";
import styled from "styled-components";
import {
  validItems,
  validateCreditCSC,
  validateCreditNumber,
  validateEmail,
  validatePassword,
} from "utils/validSignUpUtils";
import Form from "./Form";
import StyledForm from "./styles/StyledForm";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const componentActions = {
  setPopUpState: actions.setPopUpState,
};

const SignUpForm = ({
  phase,
  setPhase,
  formSubmit,
  addInputData,
  addFileData,
  information,
}) => {
  const { setPopUpState } = useActions(componentActions);
  const clickNextPhase = ({ inputs = [], next, validFuncs }) => {
    if (
      validItems({
        items: inputs,
        obj: information,
        validFuncs,
        setPopUpState,
      })
    ) {
      setPhase(phase + next);
      console.log(information);
    }
  };

  switch (phase) {
    case 1:
      return (
        <StyledForm>
          <Form
            InputWrapper={InputWrapper}
            inputs={[
              {
                onChange: addInputData,
                name: "name",
                type: "text",
                placeholder: "Name",
                value: information?.name,
              },
              {
                onChange: addInputData,
                name: "email",
                type: "email",
                placeholder: "Email",
                value: information?.email,
              },
              {
                onChange: addInputData,
                name: "password",
                type: "password",
                placeholder: "Password",
                value: information?.password,
              },
              {
                onChange: addInputData,
                name: "confirmPassword",
                type: "password",
                placeholder: "Confirm Password",
                value: information?.confirmPassword,
              },
            ]}
            ButtonWrapper={ButtonWrapper}
            buttons={[
              {
                name: "nextPhase",
                onClick: () =>
                  clickNextPhase({
                    inputs: ["name", "email", "password", "confirmPassword"],
                    next: 1,
                    validFuncs: [validateEmail, validatePassword],
                  }),
                text: "Next Phase",
              },
            ]}
          />
        </StyledForm>
      );

    case 2:
      return (
        <StyledForm>
          <Form
            inputs={[
              {
                onChange: addInputData,
                name: "cardNum",
                type: "text",
                placeholder: "Credit Card Number",
                value: information?.cardNum,
              },
              {
                onChange: addInputData,
                name: "cardValid",
                type: "month",
                placeholder: "",
                value: information?.cardValid,
              },
              {
                onChange: addInputData,
                name: "cardCSC",
                type: "text",
                placeholder: "Credit Card CSC",
                value: information?.cardCSC,
              },
            ]}
            InputWrapper={InputWrapper}
            ButtonWrapper={ButtonWrapper}
            buttons={[
              {
                name: "nextPhase",
                onClick: () =>
                  clickNextPhase({
                    inputs: ["cardNum", "cardValid", "cardCSC"],
                    next: 1,
                    validFuncs: [validateCreditNumber, validateCreditCSC],
                  }),
                text: "Next Phase",
              },
              {
                name: "back",
                onClick: () =>
                  clickNextPhase({
                    next: -1,
                  }),
                text: "Edit email and password",
              },
            ]}
          />
        </StyledForm>
      );

    case 3:
      return (
        <StyledForm>
          <Form
            InputWrapper={InputWrapper}
            ButtonWrapper={ButtonWrapper}
            inputs={[
              {
                onChange: addFileData,
                name: "img",
                type: "file",
              },
            ]}
            buttons={[
              {
                name: "submit",
                type: "submit",
                onClick: formSubmit,
                text: "Submit data",
              },
              {
                name: "back",
                onClick: () =>
                  clickNextPhase({
                    next: -1,
                  }),
                text: "Edit card details",
              },
            ]}
          />
        </StyledForm>
      );

    default:
      return <div />;
  }
};
export default SignUpForm;
