import styled from 'styled-components'

export const InputGroup = styled.div`
  width: ${(props) => (props.size || props.theme.sizes.formInputWidth)}px;
  height: ${(props) => (props.size || props.theme.sizes.formInputWidth)/5}px;
  overflow: hidden;
  position: relative;
`;

export const InputLabel = styled.label`
  position: absolute;
  top: ${(props) => (props.size || props.theme.sizes.formInputWidth)/15}px;
  color: ${(props) => props.theme.colors.primaryText}7F;
  font: 400 ${(props) => (props.size || props.theme.sizes.formInputWidth)/15}px "Roboto";
  cursor: text;
  transition: .25s ease;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding-top: ${(props) => (props.size || props.theme.sizes.formInputWidth)/15}px;
  border: none;
  border-radius: 0;
  color: ${(props) => props.theme.colors.primaryText};
  background: ${(props) => props.theme.colors.lightLightGrey};
  font-size: ${(props) => (props.size || props.theme.sizes.formInputWidth)/15}px;
  transition: .3s ease;
  &:not([value=""]) {
    ~label {
      top: 0;
      font: 700 ${(props) => (props.size || props.theme.sizes.formInputWidth)/25}px "Roboto";
      color: ${(props) => props.theme.colors.primaryText}7F;
    }
  }
  &:focus {
    outline: none;
    ~label {
      top: 0;
      font: 700 ${(props) => (props.size || props.theme.sizes.formInputWidth)/25}px "Roboto";
      color: ${(props) => props.theme.colors.secondaryInput};
    }

    ~ div:before {
      transform: translateX(0);
    }
  }
  
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px ${(props) => props.theme.colors.lightLightGrey} inset;
    -webkit-text-fill-color: ${(props) => props.theme.colors.primaryText} !important;
    ~label {
      color: ${(props) => props.theme.colors.secondaryInput};
    }
  }
`;

export const InputBar = styled.div`
  background: ${(props) => props.theme.colors.inputBar}7F;
  content: '';
  width: ${(props) => props.size || props.theme.sizes.formInputWidth}px;
  height: ${(props) => (props.size || props.theme.sizes.formInputWidth)/150}px;
  transition: .3s ease;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 150%;
    background: ${(props) => props.theme.colors.secondaryInput};
    transform: translateX(-100%);
  }
`;