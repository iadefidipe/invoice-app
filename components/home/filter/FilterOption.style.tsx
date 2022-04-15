import styled from "styled-components"
import { fontStylesA } from "../../shared/typography"

export const FilterDropdown = styled.div`
  width: 192px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 100000;
  transition: display 2s ease-in-out;
  background: ${(props) => props.theme.color.dropdown.bg};
  box-shadow: 0 10px 20px ${(props) => props.theme.color.dropdown.shadow};
  padding: 24px;
  position: absolute;
  top: 50px;
  transform: translate(0%);
  left: -100%;
  @media (min-width: 470px) {
    transform: translate(40%);
    left: -100%;
  }
`
export const Option = styled.label`
  display: flex;
  align-items: center;
  gap: 13px;

  input {
    display: none;
    :hover + div {
      border: 1px solid #7c5dfa;
    }
    :checked + div {
      background: #7c5dfa;
      > span {
        opacity: 1 !important;
      }
    }
  }

  span {
    ${fontStylesA}
    color: ${(props) => props.theme.color.text.heading};
    font-weight: bold;
    text-transform: capitalize;
    margin-bottom: -1px;
  }
`

export const Checkbox = styled.div`
  border: 1px solid transparent;
  height: 1rem;
  width: 1rem;
  border-radius: 2px;
  display: grid;
  place-content: center;
  background: ${(props) => props.theme.color.checkbox.bg};
  & > span {
    opacity: 0 !important;
  }
`
