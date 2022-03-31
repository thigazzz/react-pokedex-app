import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        border: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        width: 100vw;
        height: 100vh;
    }
`
export default GlobalStyles