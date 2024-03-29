import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import * as React from 'react'
import Layout from '../../components/layout'
export default function Home() {
  const router = useRouter()
  const onCardClick = (id) => {
    router.push(`/facilities/${id}`)
  }

  return (
    <Layout>
      <Grid container spacing={1} padding="0.5rem">
        <Grid item xs={6}>
          <Card onClick={() => onCardClick(1)}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/images/court1.jpg"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Badminton
                </Typography>
                <Typography color="text.secondary">
                  Sengkang Sports Hall
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card onClick={() => onCardClick(2)}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/images/court2.jpg"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Badminton
                </Typography>
                <Typography color="text.secondary">
                  Woodlands Sports Hall
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card onClick={() => onCardClick(3)}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/images/court3.jpg"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Badminton
                </Typography>
                <Typography color="text.secondary">
                  Hougang Sports Hall
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}
