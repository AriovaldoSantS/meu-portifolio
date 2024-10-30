import { Container, Typography } from '@mui/material';

function Footer() {
  return (
    <Container sx={{ marginTop: '2rem', padding: '1rem', textAlign: 'center' }}>
      <Typography variant="body2">
        © 2024 Ariovaldo Dev. Todos os direitos reservados.
      </Typography>
    </Container>
  );
}

export default Footer;
