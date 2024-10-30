import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Ariovaldo Dev
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/sobre">Sobre</Button>
        <Button color="inherit" component={Link} to="/portfolio">Portfólio</Button>
        <Button color="inherit" component={Link} to="/contato">Contato</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
