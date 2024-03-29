import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import BookmarksIcon from '@mui/icons-material/Bookmarks'
import LogoutIcon from '@mui/icons-material/Logout'
import SportsTennisIcon from '@mui/icons-material/SportsTennis'
import AppBar from '@mui/material/AppBar'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

function BackIcon(props) {
  const router = useRouter()
  const { path } = props

  return (
    <IconButton
      onClick={() => {
        router.push(path)
      }}
      size="large"
      edge="start"
      color="inherit"
      aria-label="back"
    >
      <ArrowBackIcon />
    </IconButton>
  )
}

export default function Layout(props) {
  const router = useRouter()

  const [value, setValue] = useState(() => {
    if (router.pathname === '/facilities') {
      return 0
    } else if (router.pathname === '/bookings') {
      return 1
    }
  })
  const { children, backPath, title } = props
  const appTitle = title ? title : 'Book To Play'
  return (
    <>
      <Head>
        <title>{`BTP - Book To Play`}</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {backPath && <BackIcon path={backPath} />}
            <Image src="/favicon.png" alt="BTP" width="50" height="50" />
            <Typography
              variant="h6"
              fontSize={16}
              fontWeight={700}
              component="h1"
              marginLeft="5px"
            >
              {appTitle}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { md: 'flex' } }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="Logout"
                onClick={() => router.push('/')}
                color="inherit"
              >
                <LogoutIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <div style={{ marginBottom: '60px' }}>{children}</div>
        <Paper
          sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue)
              switch (newValue) {
                case 0:
                  router.push('/facilities')
                  break
                case 1:
                  router.push('/bookings')
                  break
                default:
                  router.push('/facilities')
                  break
              }
            }}
          >
            <BottomNavigationAction
              label="Facilities"
              icon={<SportsTennisIcon />}
            />
            <BottomNavigationAction label="Bookings" icon={<BookmarksIcon />} />
          </BottomNavigation>
        </Paper>
      </Box>
    </>
  )
}
