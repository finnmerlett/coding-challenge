# Paired programming coding challenge

## Setup (if running on your own machine)

- Ensure node.js is installed
- Run `yarn install` to install dependencies
- Run `yarn start` to build the app

## The task

**Given a number, _n_, find the _n_ highest and lowest scores in the given array.**
_This task should take you no longer than 15-30 minutes._

The Hockey League is now in season! At the end of the season, the top _n_ teams get promoted to the division above and the bottom _n_ teams get relegated to the division below.

The division results are provided as an array of teams, as follows:

```
[
  {
    "name": "Rockets",
    "points": 64,
  },
  {
    "name": "Cardinals",
    "points": 77,
  },
  {
    "name": "Bruisers",
    "points": 51,
  },
  {
    "name": "Renegades",
    "points": 37,
  },
  {
    "name": "Porpoises",
    "points": 52,
  }
]

```

Modify the App component function to take user input of the number of teams to relegate/promote (_n_) and display it in a sensible way on the main page. Below are examples of what different results might look like:

For an _n_ value of 2, the results must be:

```
Promote:
[Highest scoring team]
[Second highest scoring team]

Relegate:
[Second lowest scoring team]
[Lowest scoring team]
```

For an _n_ value of 3, the results must be:

```
Promote:
[Highest scoring team]
[Second highest scoring team]
[Third highest scoring team]

Relegate:
[Third lowest scoring team]
[Second lowest scoring team]
[Lowest scoring team]
```
## Constraints

- There could be between 2 and 16 teams in a given division.
- A team always consists of a `name` string and a `points` integer, which is always positive or 0.
- If teams both in the top `n` and bottom `n` for the division, the promotion and relegation process will not work and the user must be notified of the problem.

## Tips

- We are looking for clean code, which is easy to read and free of code smells.
