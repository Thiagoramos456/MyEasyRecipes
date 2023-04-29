import { useRouter } from 'next/router';
import { getAllCategories, getMealsByCategory } from '../../services/MealApiService';
import IMeal from '../../types/IMeal';
import MealsDisplay from '../../components/Home/MealsDisplay';

function CategoryPage({ meals, categoryName } : IProps) {
	return <>
		<MealsDisplay meals={ meals } categoryName={categoryName} />
	</>
}

interface IProps {
  meals: IMeal[];
	categoryName: string;
}

export async function getStaticPaths() {
	const categories = await getAllCategories();

	const categoriesParams = categories.map(c => ({ params: { category: c.strCategory } }))

  return {
    paths: categoriesParams,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
	console.log(params)
	const meals = await getMealsByCategory(params.category)

  return { props: { meals, categoryName: params.category } }
}

export default CategoryPage;