import { Box, Grid, Typography } from '@mui/material';
import CategoryCard from '../CategoryCard';
import ICategory from '../../types/ICategory';

function CategoriesDisplay({ categories }: IProps) {
  return (
    <Box>
      <Grid my={4} display='flex' justifyContent='center' alignItems='center'>
        <Typography variant='h5'>Categories</Typography>
      </Grid>
      <Box
        display='flex'
        gap={2}
        flexWrap='wrap'
        justifyContent='center'
        alignItems='center'
      >
        {categories.map((category) => (
          <CategoryCard key={category.idCategory} category={category} />
        ))}
      </Box>
    </Box>
  );
}

interface IProps {
  categories: ICategory[];
}

export default CategoriesDisplay;
