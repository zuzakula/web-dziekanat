import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "../sidenav.module.css";
import { Divider } from "@mui/material";
import user from "../userInformation.json";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundColor: "#AF0000"}}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {(!window.location.pathname.includes("login")) && (
                <span>
                  Zalogowany użytkownik: {user.firstName} {user.surname}
                </span>
              )}
            </Typography>
            {(!window.location.pathname.includes("login")) && (
              <Button
                color="inherit"
                onClick={() => {
                  navigate("/login");
                  window.location.reload(true);
                }}
              >
                Logout
              </Button>
            )}
          </Toolbar>
        </AppBar>
        <h1 className={styles.mainHeader}>WebDziekanat</h1>
        <Divider></Divider>
      </Box>
    </>
  );
}

export default Menu;
