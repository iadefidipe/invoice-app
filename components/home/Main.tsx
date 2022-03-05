import styled from "styled-components"

// import LayoutMain from '../layout/Main'

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  padding: 2rem 1.5rem;
  @media only screen and (min-width: 768px) {
    padding: 3.5rem 3rem;
  }
  @media only screen and (min-width: 1024px) {
    padding: 4.5rem 3rem;
  }
`
// const Wrapper = styled.main`
//     flex: 1;

// `

interface MainInterface {
  children: React.ReactNode
}

export default function Main({ children }: MainInterface) {
  return <Wrapper>{children}</Wrapper>
}
