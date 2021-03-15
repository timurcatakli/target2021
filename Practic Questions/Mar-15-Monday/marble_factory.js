/**************************************************************
 Congratulations! You've inherited a marble factory. You want to make sure you have the toughest marbles in the world.
 You ask a friend that owns a skyscraper if you can throw some marbles off her building to find out just how tough they are.
 Because you own the factory, you fill a backpack with 3000 marbles (far more than the number of stories in your friend's building).
 You want to find the highest floor from which you can throw a marble such that it won't break.
 When the marbles hit the ground, your team of scientists will collect them for examination,
 so you can't reuse marbles that you've already thrown.
 What's a good strategy for you to find the highest floor with the fewest number of throws?

 Now, you have a new batch of marbles. They're really expensive to create, so you only have two prototypes.
 This time, you go to your friend's skyscraper. You only have the two marbles,
 so your team of scientists will collect a thrown marble for you and bring it to you in the building if it doesn't break.
 That means you can reuse an unbroken marble, now.
 What is a good strategy to find the highest floor with the fewest number of throws?

 Please define your own functions to solve the problem in two steps:
 1, Define the function to solve it with unlimited marbles;
 2, Define the function to solve it with only two marbles;
 *************************************************************/
// Binary search
const minTryWithInfiMarbles = n => Math.ceil(Math.log(n));

// Gaussian Sum
// Say the first floor number we need to start is f, then the equation will be:
// f + (f -1) + (f - 2) + ... + 2 + 1 >= n
// which is Gaussian Sum f(f + 1)/2 >= n ---> f^2 + f - 2n >= 0
// Please read more:
// https://www.freecodecamp.org/news/how-to-solve-the-google-recruiters-puzzle-about-throwing-eggs-from-a-building-de6e7ef1755d/
const minTryWithTwoMarbles = n => Math.ceil((Math.sqrt(8 * n + 1) - 1) / 2);
