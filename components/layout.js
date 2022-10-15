import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import AppBar from "@mui/material/AppBar";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Layout(props) {
  const router = useRouter();

  const [value, setValue] = useState(() => {
    if (router.pathname === "/") {
      return 0;
    } else if (router.pathname === "/bookings") {
      return 1;
    } else if (router.pathname === "/profile") {
      return 2;
    }
  });
  const { children } = props;

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
        {children}
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              switch (newValue) {
                case 0:
                  router.push("/");
                  break;
                case 1:
                  router.push("/bookings");
                  break;
                case 2:
                  router.push("/profile");
                  break;
                default:
                  router.push("/");
                  break;
              }
            }}
          >
            <BottomNavigationAction
              label="Facilities"
              icon={<SportsTennisIcon />}
            />
            <BottomNavigationAction label="Bookings" icon={<BookmarkIcon />} />
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
