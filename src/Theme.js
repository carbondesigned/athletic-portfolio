import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    mainWhite: "#F1EDEE",
    accRed: "#D31027",
    darkGrey: "#686963",
    lightGrey: "#D9D1D3",
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}> {children} </ThemeProvider>
)

export default Theme
