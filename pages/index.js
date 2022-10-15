import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AppBar from "@mui/material/AppBar";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import * as React from "react";

export default function Home() {
  const [value, setValue] = React.useState(0);
  return (
    <>
      <Head>
        <title>{`Sports On - Just be active`}</title>
      </Head>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h1"
              fontSize={22}
              fontWeight={700}
              component="div"
            >
              Sports on
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container spacing={1} padding="0.5rem">
          <Grid item xs={6}>
            <Card>
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
            <Card>
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
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/court3.jpg"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    Table Tennis
                  </Typography>
                  <Typography color="text.secondary">
                    Hougang Sports Hall
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              label="Facilities"
              icon={<BookmarkIcon />}
            />
            <BottomNavigationAction
              label="Profile"
              icon={<AccountCircleIcon />}
            />
          </BottomNavigation>
        </Paper>
      </Box>
    </>
  );
}
