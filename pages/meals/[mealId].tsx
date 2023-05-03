import { Grid, Typography, Box, CardMedia } from '@mui/material';
import { IMealDetails } from '../../types/IMeal';
import { getMealById } from '../../services/MealApiService';

function MealDetailsPage({ meal }: IProps) {
  return (
    <>
      <Grid my={4} display='flex' justifyContent='center' alignItems='center'>
        <Typography variant='h5'>{meal.strMeal}</Typography>
      </Grid>
      <Box my={3} display={'flex'} justifyContent='center'>
        <CardMedia
          component='img'
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
            borderRadius: '10px',
          }}
          alt={meal.strMeal}
          src={meal.strMealThumb}
        />
      </Box>
      <Box>
        <Typography variant='h6'>{`Category: ${meal.strCategory}`}</Typography>
        <Typography mt={3} mb={2} variant='h6'>How to prepare</Typography>

        <Typography>{meal.strInstructions}</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} my={5}>
        <iframe
          style={{ border: "none" }}
          width='560'
          height='315'
          src={meal.strYoutube.replace('watch?v=', 'embed/')}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
      </Box>
    </>
  );
}

interface IProps {
  meal: IMealDetails;
}

export async function getServerSideProps({ params }) {
  const { mealId } = params;
  const meal: IMealDetails = await getMealById(mealId);
  return {
    props: {
      meal,
    },
  };
}

export default MealDetailsPage;
