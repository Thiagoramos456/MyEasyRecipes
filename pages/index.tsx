import { Container } from '@mui/material';
import CategoriesDisplay from '../components/CategoriesDisplay';
import Navbar from '../components/Navbar';
import ICategory from '../types/ICategory';

function Home({ categories }: IProps) {
  return <>
    <Navbar />
    <Container sx={{ pt: 9 }}>
      <CategoriesDisplay categories={ categories } />
    </Container>
  </> 
}

interface IProps {
  categories: ICategory[];
}

export async function getStaticProps() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  const data = await res.json();

  return {
    props: {
      categories: data.categories
    }
  }
}

export default Home;