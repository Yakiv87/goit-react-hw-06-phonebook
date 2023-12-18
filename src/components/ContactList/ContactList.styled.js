import styled from 'styled-components';

export const ContactsList = styled.ol`
padding: 10px;
`
export const ListItem = styled.li`
margin-bottom: 10px;
`

export const DeleteBtn = styled.button`
  background-color: ${props => props.theme.colors.white};
  border: 0;
  border-radius: .5rem;
  box-sizing: border-box;
  color: ${props => props.theme.colors.black};
  font: 400 ${(props) => (props.size || props.theme.sizes.formInputWidth)/15}px inherit;
  line-height: 1rem;
  padding: 3px .5rem;
  text-align: center;
  text-decoration: none ${props => props.theme.colors.textDecorationColor} solid;
  text-decoration-thickness: auto;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover, &:focus {
    background-color: ${props => props.theme.colors.secondaryBgc};
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  &:focus-visible {
    box-shadow: none;
  }
`;