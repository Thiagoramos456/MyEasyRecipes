import ICategory from '../types/ICategory';
import IMeal from '../types/IMeal';

export async function getAllCategories(): Promise<ICategory[]> {
	const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  const data = await res.json();
	return data.categories as ICategory[];
}

export async function getMealsByCategory(category: string): Promise<IMeal[]> {
	const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  const data = await res.json();
	return data.meals as IMeal[];
}