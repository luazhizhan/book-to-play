import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#E91E63',
        dark: '#C2185B',
        light: '#F8BBD0',
      },
      secondary: {
        main: '#ffc107',
        light: '#ffecb3',
        dark: '#ffa000',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Component {...pageProps} />
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export default MyApp
