import { useRouter } from 'next/router';
import {
  getAllCategories,
  getMealsByCategory,
} from '../../services/MealApiService';
import IMeal from '../../types/IMeal';
import MealsDisplay from '../../components/Home/MealsDisplay';
import ICategory from '../../types/ICategory';
import { Box, Grid, Paper, Typography } from '@mui/material';

function CategoryPage({ meals, category }: IProps) {
  return (
    <>
      <Grid my={4} display='flex' justifyContent='center' alignItems='center'>
        <Typography variant='h5'>{category.strCategory ?? ""}</Typography>
      </Grid>
      <Box my={3} display={'flex'} justifyContent='center'>
        <Box
          component='img'
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt={category.strCategory ?? ""}
          src={category.strCategoryThumb ?? ""}
        />
      </Box>
      <Typography>{category.strCategoryDescription}</Typography>
      <MealsDisplay meals={meals} />
    </>
  );
}

interface IProps {
  meals: IMeal[];
  category: ICategory;
}

export async function getStaticPaths() {
  const categories = await getAllCategories();
  const categoriesParams = categories.map((c) => ({
    params: { category: c.strCategory },
  }));

  return {
    paths: categoriesParams,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const meals = await getMealsByCategory(params.category);
  const categories = await getAllCategories();
  const category = categories.find((c) => c.strCategory === params.category);

  return {
    props: {
      meals,
      category,
    },
  };
}

export default CategoryPage;
