import useSWR from 'swr';
import ICategory from '../types/ICategory';
import  { IMeal, IMealDetails } from '../types/IMeal';


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

export async function getMealById(mealId: string): Promise<IMealDetails> {
	const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
  const data = await res.json();
	return data.meals[0] as IMealDetails;
}

export async function getMealsByName(mealName: string): Promise<IMeal[]> {
	const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
	const data = await res.json();
	return data.meals as IMeal[];
}