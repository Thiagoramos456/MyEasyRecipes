import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import IMeal from '../types/IMeal';

function MealCard({ meal }: IProps) {
  return (
    <Card sx={{ width: 200, height: 230, px: 1 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={meal.strMealThumb}
        title={meal.strMeal}
      />
      <CardContent>
        <Typography
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
          }}
          gutterBottom
          variant='h6'
          component='div'
        >
          {meal.strMeal}
        </Typography>
      </CardContent>
    </Card>
  );
}

interface IProps {
  meal: IMeal;
}

export default MealCard;
