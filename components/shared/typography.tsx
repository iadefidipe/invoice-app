import { css } from "styled-components"

interface TypographyStyled {
  size?: string
  color?: string
}

const baseStyles = css`
  font-family: "Spartan", sans-serif;
  transition: color 0.3s;
`

export const fontStylesA = css<TypographyStyled>`
  ${baseStyles}
  color: ${(props) => props.color || props.theme.color.text.bodyA};
  font-size: ${(props) => props.size || ".75rem"};
  line-height: 1.125;
  letter-spacing: -0.25px;
`

export const fontStylesB = css<TypographyStyled>`
  ${baseStyles}
  color: ${(props) => props.color || props.theme.color.text.bodyA};
  font-size: ${(props) => props.size || ".6875rem"};
  line-height: 1.63;
  letter-spacing: -0.23px;
`
