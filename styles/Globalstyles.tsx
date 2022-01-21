import { createGlobalStyle } from 'styled-components'
import { StyleInterface } from '../types/types'

interface GlobalStyleInterface {
	theme: StyleInterface
}

export const GlobalStyles = createGlobalStyle<GlobalStyleInterface>`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        background: ${({ theme }) => theme.color.body.bg};
        font-family: 'Spartan', sans-serif;
        transition: background .3s;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }
`
export default GlobalStyles
