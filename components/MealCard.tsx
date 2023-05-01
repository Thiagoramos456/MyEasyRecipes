import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  CircularProgress,
  Box,
} from '@mui/material';
import Link from 'next/link';
import { IMeal } from '../types/IMeal';
import { orange } from '@mui/material/colors';
import { useState } from 'react';

function MealCard({ meal }: IProps) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Card sx={{ width: 200, height: 230, px: 1, py: 1, position: 'relative' }}>
      <CardActionArea onClick={() => setIsLoading(true)} sx={{}}>
        <Link href={`/meals/${meal.idMeal}`}>
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
        </Link>
      </CardActionArea>
      {isLoading && (
        <>
          <CircularProgress
            size={40}
            sx={{
              color: orange[300],
              position: 'absolute',
              top: 80,
              left: 89,
              zIndex: 2,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '100%',
              bgcolor: 'rgba(0, 0, 0, 0.40)',
              color: 'white',
              padding: '10px',
              zIndex: 1,
            }}
          />
        </>
      )}
    </Card>
  );
}

interface IProps {
  meal: IMeal;
  isLoading: boolean;
}

export default MealCard;
