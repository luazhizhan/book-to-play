import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import * as React from 'react'
export default function Home() {
  const router = useRouter()
  const onClick = () => {
    router.push(`/facilities`)
  }

  return (
    <>
      <Head>
        <title>{`BTP - Book To Play`}</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
          height: '100vh',
          padding: '10rem 2rem',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image src="/images/login.svg" alt="login" width={250} height={400} />
        <Typography variant="h5" component="h1">
          Welcome to <b style={{ color: '#E91E63' }}>BTP - Book To Play</b>
        </Typography>
        <Button
          variant="contained"
          fullWidth
          color="error"
          size="large"
          onClick={onClick}
        >
          Login with Singpass
        </Button>
      </Box>
    </>
  )
}
