import { Container } from '@mui/material';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Container sx={{ pt: 9 }}>
        <Navbar />
        <main>{children}</main>
      </Container>
    </>
  );
}
