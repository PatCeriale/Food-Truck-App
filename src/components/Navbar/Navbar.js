import * as React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Hidden,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import SideDrawer from "./SideDrawer";
import Logo from "./TruckNTasty.png";

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
});

const navLinks = [
  { title: `Home`, path: `/` },
  { title: `User Account`, path: `/user` },
  { title: `Search for Food Trucks`, path: `/search` },
  { title: `Sign In`, path: `/signin` },
  { title: `Sign Up`, path: `/signup` },
  { title: `Log Out`, path: `/logout` },
];

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="xl" className={classes.navbarDisplayFlex}>
          <IconButton edge="start" color="inherit" aria-label="home" href="/">
            <img src={Logo} style={{ height: "150px", width: "150px" }} />
          </IconButton>
          <Hidden smDown>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {navLinks.map(({ title, path }) => (
                <a href={path} key={title} className={classes.linkText}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </a>
              ))}
            </List>
          </Hidden>
          <Hidden mdUp>
            <SideDrawer navLinks={navLinks} />
          </Hidden>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
