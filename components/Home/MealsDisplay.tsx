import { Box, Grid, Typography } from '@mui/material';
import MealCard from '../MealCard';
import IMeal from '../../types/IMeal';

function MealsDisplay({ meals } : IProps) {
  return (
    <Box>
      <Grid my={4} display='flex' justifyContent='center' alignItems='center'>
        <Typography variant='h5'>{ "Meals" }</Typography>
      </Grid>
			<Box display='flex' gap={2} flexWrap='wrap' justifyContent='center' alignItems='center'>
			{ meals?.map((meal) => <MealCard meal={meal} /> ) }
			</Box>
    </Box>
  );
}

interface IProps {
  meals: IMeal[];
  disableTitle?: boolean;
}

export default MealsDisplay;
