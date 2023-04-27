import {
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';
import ICategory from '../types/ICategory';

function CategoryCard({ category }: IProps) {
  return (
    <Card sx={{ width: 180, maxHeight: 200, px: 1 }}>
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
    </Card>
  );
}

interface IProps {
  category: ICategory;
}

export default CategoryCard;
