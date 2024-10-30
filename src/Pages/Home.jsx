import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Oi! Eu sou Ariovaldo, desenvolvedor frontend.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Crio experiências digitais simples e eficazes.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/portfolio">
        Veja Meu Portfólio
      </Button>
    </Container>
  );
}

export default Home;
