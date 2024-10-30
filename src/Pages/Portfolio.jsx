import { Card, CardContent, Container, Typography } from '@mui/material';

const projetos = [
  { nome: 'PDVFlow', descricao: 'Sistema de ponto de venda funcional.', link: 'https://github.com/seu-repositorio' },
  { nome: 'Site Pessoal', descricao: 'Meu portfólio e presença digital.', link: 'https://github.com/seu-repositorio' },
];

function Portfolio() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Meu Portfólio
      </Typography>
      {projetos.map((projeto, index) => (
        <Card key={index} sx={{ margin: '1rem 0' }}>
          <CardContent>
            <Typography variant="h5">{projeto.nome}</Typography>
            <Typography>{projeto.descricao}</Typography>
            <a href={projeto.link} target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default Portfolio;
