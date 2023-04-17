import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
  ButtonGroup,
} from "@mui/material";
import { MouseEvent, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useCountry } from "context/CountryContext";

const pages = [
  { title: "TOP NEWS", link: "/" },
  { title: "CAEGORIES", link: "/caegories" },
  { title: "SEARCH", link: "/search" },
];
const settings = ["GB", "US"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const { country, setCountryData } = useCountry();

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.title}
                    onClick={handleCloseNavMenu}
                    component={Link}
                    href={page.link}
                    to={page.link}
                  >
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page.title}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                  component={Link}
                  href={page.link}
                  to={page.link}
                >
                  {page.title}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <ButtonGroup
                variant="outlined"
                aria-label="outlined button group"
                color="warning"
                sx={{
                  "& .MuiButton-outlined": { backgroundColor: "grey.200" },
                }}
              >
                <Button
                  variant={country === "gb" ? "contained" : "outlined"}
                  onClick={() => setCountryData("gb")}
                >
                  GB
                </Button>
                <Button
                  variant={country === "us" ? "contained" : "outlined"}
                  onClick={() => setCountryData("us")}
                >
                  US
                </Button>
              </ButtonGroup>
              {/* <Tooltip title="GB">
                <IconButton sx={{ p: 1 }} onClick={() => setCountryData("gb")}>
                  <Box
                    component="img"
                    src="/images/uk.png"
                    sx={{
                      borderRadius: "50%",
                      border: `2px solid ${
                        country === "gb" ? "white" : "transparent"
                      }`,
                    }}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="US">
                <IconButton sx={{ p: 1 }} onClick={() => setCountryData("us")}>
                  <Box
                    component="img"
                    src="/images/us.png"
                    sx={{
                      borderRadius: "50%",
                      border: `2px solid ${
                        country === "us" ? "white" : "transparent"
                      }`,
                    }}
                  />
                </IconButton>
              </Tooltip> */}
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ height: "4rem" }}></Box>
    </>
  );
};

export default Navbar;
