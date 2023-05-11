# MyEasyRecipes 🍲 
A recipe website made in NextJs

**This project uses the [MealDBApi](https://www.themealdb.com/api.php) :spaghetti: API.**

## Preview 

Check out the [live demo](https://my-easy-recipes.vercel.app/) of the application.

## Dependencies (Front End) 📋

- [Node.js](https://nodejs.org/en/) (lts/hydrogen)
- [React](https://reactjs.org/) v18.2.0
- [Next.js](https://nextjs.org/) v13.3.1
- [TypeScript](https://www.typescriptlang.org/) v5.0.4
- [@emotion/react](https://emotion.sh/docs/introduction) v11.10.6
- [@emotion/server](https://emotion.sh/docs/server-side-rendering) v11.10.0
- [@emotion/styled](https://emotion.sh/docs/styled) v11.10.6
- [@fontsource/roboto](https://github.com/fontsource/fontsource) v4.5.8
- [@mui/icons-material](https://mui.com/components/icons/) v5.11.16
- [@mui/material](https://mui.com/) v5.12.1

### DevDependencies

- [@types/node](https://www.npmjs.com/package/@types/node) v18.16.0
- [@types/react](https://www.npmjs.com/package/@types/react) v18.0.38

# How to run the website

## Installation 💻

1. Clone the project repository
2. Install the dependencies using the command `npm install`

## Start the application 🚀

1. Open the terminal and run the command `npm build`
2. Then, run the command `npm start`
3. Access the application at `http://localhost:3000`

## Start using Docker 🐳

If you want, you can run the project using Docker. If you have not installed Docker, [click here](https://www.docker.com/).

1. Enter the repository and open the terminal
2. Run the command  `docker build -t 'myeasyrecipes' .`
3. Afterwards, run the command `docker run -d -p 3000:3000 --name "myeasyrecipes-container" myeasyrecipes`
4. Access the application at `http://localhost:3000`

