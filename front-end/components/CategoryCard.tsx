import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Box,
  CircularProgress,
} from '@mui/material';
import ICategory from '../types/ICategory';
import Link from 'next/link';
import { orange } from '@mui/material/colors';
import { useState } from 'react';

function CategoryCard({ category }: IProps) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Card sx={{ width: 180, maxHeight: 200, position: 'relative' }}>
      <CardActionArea onClick={() => setIsLoading(true)} sx={{ px: 1 }}>
        <Link href={`/categories/${category.strCategory}`}>
          <CardMedia
            sx={{ height: 140 }}
            image={category.strCategoryThumb}
            title={category.strCategory}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {category.strCategory}
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
              left: 73,
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
  category: ICategory;
}

export default CategoryCard;
