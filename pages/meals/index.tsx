import { Button, FormGroup, Grid, TextField } from '@mui/material';
import { FormEvent, FormEventHandler, useEffect, useState } from 'react';
import MealsDisplay from '../../components/Home/MealsDisplay';
import useSWR from 'swr';
import { getMealsByName } from '../../services/MealApiService';

function MealsSearchPage() {
  const [meals, setMeals] = useState([]);
  const [mealSearchName, setMealSearchName] = useState('');

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    console.log(e)
    const data = await getMealsByName(mealSearchName);
    setMeals(data);
  };

  return (
    <>
      <Grid
        my={4}
        flexDirection='column'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <form onSubmit={(e) => handleSearch(e)}>
          <FormGroup sx={{ my: 6 }}>
            <TextField
              sx={{ width: '50vw' }}
              label='Search a meal...'
              variant='outlined'
              onChange={(e) => setMealSearchName(e.target.value)}
            />
            <Button variant='contained'>
              Search
            </Button>
          </FormGroup>
        </form>
      </Grid>
      <MealsDisplay meals={meals} />
    </>
  );
}

export default MealsSearchPage;
