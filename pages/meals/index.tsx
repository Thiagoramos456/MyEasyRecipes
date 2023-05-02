import { Button, FormGroup, Grid, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import MealsDisplay from '../../components/Home/MealsDisplay';
import useSWR from 'swr';
import { getMealsByName } from '../../services/MealApiService';

const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init);
  return res.json();
};


function MealsSearchPage() {
  const [meals, setMeals] = useState([]);
	const [mealSearchName, setMealSearchName] = useState("");

  const handleSearch = async () => {
		const data = await getMealsByName(mealSearchName);
		console.log(data);
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
				<FormGroup sx={{my: 6}}>
					<TextField
						sx={{ width: '50vw'}}
						label='Search a meal...'
						variant='outlined'
						onChange={(e) => setMealSearchName(e.target.value)}
					/>
					<Button onClick={ handleSearch } variant="contained">Search</Button>
				</FormGroup>
      </Grid>
      <MealsDisplay meals={meals} />
    </>
  );
}

export default MealsSearchPage;
