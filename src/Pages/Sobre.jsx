import { Container, List, ListItem, Typography } from '@mui/material';

function Sobre() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Sobre Mim
      </Typography>
      <Typography variant="body1" gutterBottom>
        Desde o design até o desenvolvimento, sempre gostei de resolver problemas e criar interfaces simples.
      </Typography>
      <Typography variant="h5">Tecnologias que utilizo:</Typography>
      <List>
        <ListItem>HTML & CSS</ListItem>
        <ListItem>JavaScript & React</ListItem>
        <ListItem>Node.js & Express</ListItem>
      </List>
    </Container>
  );
}

export default Sobre;
