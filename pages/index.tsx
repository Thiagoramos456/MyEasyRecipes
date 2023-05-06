import CategoriesDisplay from '../components/Home/CategoriesDisplay';
import ICategory from '../types/ICategory';
import {
  getAllCategories,
  getMealsByCategory,
} from '../services/MealApiService';
import MealsDisplay from '../components/Home/MealsDisplay';
import { IMeal } from '../types/IMeal';
import Head from 'next/head';

function Home({ categories, randomMeals }: IProps) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <CategoriesDisplay categories={categories} />
      <MealsDisplay meals={randomMeals} />
    </>
  );
}

interface IProps {
  categories: ICategory[];
  randomMeals: IMeal[];
}

export async function getStaticProps() {
  const categories = await getAllCategories();

  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];
  const randomMeals = await getMealsByCategory(randomCategory.strCategory);

  return {
    props: {
      categories,
      randomMeals,
    },
  };
}

export default Home;
