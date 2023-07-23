import Box from "@mui/material/Box";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Snackbar,
  TextField,
} from "@mui/material";
import styles from "../login.module.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import user from "../userInformation.json";
import * as React from "react";
import MuiAlert from "@mui/material/Alert";
import background from "./img/pl.jpg";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  function submit() {
    if (password === user.password && login === user.login) {
      navigate("/home");
      window.location.reload(true);
    } else {
      handleClick();
      console.log("cannot login");
    }
  }

  return (
    <Box
      style={{
        backgroundImage: `url(${background})`,
        position: "fixed",
        left: 0,
        width: "-webkit-fill-available",
        height: "-webkit-fill-available",
      }}
    >
      <form className={styles.login}>
        <TextField
          label="Login"
          variant="outlined"
          onChange={(event) => setLogin(event.target.value)}
          sx={{ marginTop: "10%" }}
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          onChange={(event) => setPassword(event.target.value)}
          sx={{ marginTop: "10%" }}
        />
        <FormGroup sx={{ marginTop: "10%", fontSize: "8px" }}>
          <FormControlLabel
            control={<Checkbox color="secondary" />}
            label="Zapamiętaj"
          />
        </FormGroup>
        <Button
          onClick={() => submit()}
          sx={{ color: "white", marginTop: "10%", backgroundColor: "#AF0000" }}
          variant="contained"
        >
          Login
        </Button>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Wrong password or login
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Login;
