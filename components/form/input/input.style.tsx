import styled, { css } from "styled-components"
import { fontStylesA } from "../../shared/typography"

interface InputStyleInterface {
  hideLabels?: boolean
  valid?: boolean
  faded?: boolean
}

export const InputWrapper = styled.div<InputStyleInterface>`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  ${fontStylesA}
  :focus-within label {
    color: ${(props) => props.theme.color.text.formLabel};
  }
  ${(props) =>
    props.hideLabels &&
    css`
      @media only screen and (min-width: 600px) {
        & > *:nth-child(1) {
          clip: rect(0 0 0 0);
          clip-path: inset(50%);
          height: 1px;
          overflow: hidden;
          position: absolute;
          white-space: nowrap;
          width: 1px;
        }
      }
    `}
`

export const Label = styled.label<InputStyleInterface>`
  color: ${(props) =>
    props.valid ? props.theme.color.text.formLabel : "#EC5757"};
  transition: color 0.3s;
`
export const StyleField = styled.input<InputStyleInterface>`
  ${fontStylesA}
  width: 100%;
  border: 1px solid
    ${(props) => (props.valid ? props.theme.color.form.fieldBorder : "#EC5757")};
  border-radius: 4px;
  padding: 1rem 1.25rem;
  background: ${(props) => props.theme.color.form.fieldBg};
  outline: none;
  color: ${(props) => props.theme.color.text.heading};
  font-weight: bold;
  transition: color 0.3s, border 0.3s, background 0.3s;
  ::placeholder {
    color: ${(props) => props.theme.color.text.placeholder};
    transition: color 0.3s;
  }
  :focus {
    border: 1px solid #9277ff;
  }
  ${(props) =>
    props.faded &&
    css`
      border: none;
      padding: 1rem 0;
      background: transparent;
      color: #888eb0;
      :focus {
        border: none;
      }
    `}
`
