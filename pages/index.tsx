import { Container } from '@mui/material';
import CategoriesDisplay from '../components/Home/CategoriesDisplay';
import Navbar from '../components/Navbar';
import ICategory from '../types/ICategory';
import { getAllCategories, getMealsByCategory } from '../services/MealApiService';
import IMeal from '../types/IMeal';
import MealsDisplay from '../components/Home/MealsDisplay';

function Home({ categories, randomMeals }: IProps) {
  return <>
    <Navbar />
    <Container sx={{ pt: 9 }}>
      <CategoriesDisplay categories={ categories } />
      <MealsDisplay meals={ randomMeals } />
    </Container>
  </> 
}

interface IProps {
  categories: ICategory[];
  randomMeals: IMeal[];

}

export async function getStaticProps() {
  const categories = await getAllCategories();
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const randomMeals = await getMealsByCategory(randomCategory);

  return {
    props: {
      categories,
      randomMeals
    }
  }
}

export default Home;