import { Button, Container, TextField, Typography } from '@mui/material';

function Contato() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contato
      </Typography>
      <form>
        <TextField label="Nome" fullWidth margin="normal" />
        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Mensagem" multiline rows={4} fullWidth margin="normal" />
        <Button variant="contained" color="primary" type="submit">
          Enviar
        </Button>
      </form>
    </Container>
  );
}

export default Contato;
