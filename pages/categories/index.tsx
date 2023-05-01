import CategoriesDisplay from '../../components/Home/CategoriesDisplay';
import { getAllCategories } from '../../services/MealApiService';
import ICategory from '../../types/ICategory';

export default function CategoriesPage({ categories }: IProps) {
  return <CategoriesDisplay categories={categories} />;
}

interface IProps {
  categories: ICategory[];
}

export async function getStaticProps() {
  const categories = await getAllCategories();

  return {
    props: {
      categories,
    },
  };
}
