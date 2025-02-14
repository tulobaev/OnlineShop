import { AppBar, Toolbar, Button, Box } from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import { Link } from "react-router-dom";
import scss from "./Header.module.scss";

function Header() {
  return (
    <div className="container">
      <Box>
        <AppBar
          position="static"
          sx={{
            background: "linear-gradient(90deg, #212121 0%, #424242 100%)",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Toolbar
            sx={{ display: "flex", justifyContent: "space-between", px: 2 }}
          >
            <StoreIcon
              sx={{ fontSize: "clamp(30px, 4vw, 40px)", color: "#fff" }}
            />
            <Box sx={{ display: "flex", gap: "clamp(8px, 2vw, 16px)" }}>
              <Link className={scss.link} to="/">
                <Button
                  sx={{ fontSize: "clamp(12px, 1.5vw, 16px)" }}
                  color="inherit"
                >
                  Home
                </Button>
              </Link>

              <Link className={scss.link} to="/Admin">
                <Button
                  sx={{ fontSize: "clamp(12px, 1.5vw, 16px)" }}
                  color="inherit"
                >
                  Admin
                </Button>
              </Link>
              <Link className={scss.link} to="/Login">
                <Button
                  sx={{ fontSize: "clamp(12px, 1.5vw, 16px)" }}
                  color="inherit"
                >
                  Login
                </Button>
              </Link>
              <Link className={scss.link} to="/Cart">
                <Button
                  sx={{ fontSize: "clamp(12px, 1.5vw, 16px)" }}
                  color="inherit"
                >
                  Cart
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Header;
