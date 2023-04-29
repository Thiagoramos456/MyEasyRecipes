import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from '@mui/material';
import ICategory from '../types/ICategory';
import Link from 'next/link';

function CategoryCard({ category }: IProps) {
  return (
    <Card sx={{ width: 180, maxHeight: 200 }}>
      <CardActionArea sx={{ px: 1 }}>
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
    </Card>
  );
}

interface IProps {
  category: ICategory;
}

export default CategoryCard;
