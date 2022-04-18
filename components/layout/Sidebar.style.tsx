import styled, { css } from "styled-components"
import { flex } from "../../styles/HelperStyles"

const extendedstyle = css`
  ${flex}
  @media (min-width: 900px) {
    flex-direction: column;
  }
`

export const SidebarWrapper = styled.aside`
  ${extendedstyle}
  background-color: ${({ theme }) => theme.color.sidebar.bg};
  position: sticky;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  max-height: 100vh;

  @media (min-width: 900px) {
    border-radius: 0 20px 20px 0;
  }
`
export const InnerWrapper = styled.div`
  ${extendedstyle}
  gap: 49px;
  margin-right: 25px;
  @media (min-width: 900px) {
    margin-right: 0;
    margin-bottom: 25px;
  }
`
