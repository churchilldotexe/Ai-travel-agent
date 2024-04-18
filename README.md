# Ai Travel Agent

This project uses OpenAI API, which facilitates [automated function calls](https://github.com/openai/openai-node/tree/master#automated-function-calls), was utilized in this project. It aggregates all the necessary functions for this project, including those for Weather, GEO location, Hotel Booking, and Flight Booking. Making it more like of a Travel Agent.

## Usage:

- click start
- fill the input field with the information about the guests, travel date, return date, your origin and destination, and also your budget.
- it will generate the best flight for you base on your input.

## TODOS:

- [x] home, travelForm, travelDetails,pages UI
- [x] setup server action with form try using Reacthook form
- [x] use Weather API for weather, geolocation and try using hotel and flight booking.. if cant Prompt openAI to get data
- [x] use Ai prompting with JSON as result
- [x] push all to a array of object and get ID as query params to be use in travelInfo
- [] create booked flight/hotel page use dynamic routes
- [] fix loading states for form, and all other pages (use animation this time )
- [x] handle error to be redirected in error page
- []

##### to start:

```
nvm use
pnpm install

pnpm run dev
```

Note:

- node is locked at 18.0.0 or higher
- pnpm is locked at 4.0.2 or higher

```
"node": ">=18.0.0",
"pnpm": ">=4.0.2"
```

##### lint staged:

there will be a linting and typescript check every commit to ensure a type safe codebase before pushing the code to github or deploying it

##### about commits:

    commits is following the [npm package](https://www.npmjs.com/package/@commitlint/
    [conventional commits docs](https://www.conventionalcommits.org/en/v1.0.0/#summary)
    config-conventional) where you can only pass the values:

(case sensitive)

```
  'build',
  'chore',
  'ci',
  'docs',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  'style',
  'test'
```

example:

```
echo "foo: some message" # fails
echo "FIX: some message" # fails
echo "fix: some message" # passes
```

stacks used:

- [Next.js](https://nextjs.org) - [T3 Stack](https://create.t3.gg/)
- API used:

  - ##### openAI
  - [openAi api docs](https://platform.openai.com/docs/introduction)

    - The OpenAI API, which facilitates [automated function calls](https://github.com/openai/openai-node/tree/master#automated-function-calls), was utilized in this project.

  - #### [rapidApi](https://rapidapi.com/ntd119/api/booking-com18)

    - The project utilizes a hub of APIs, similar to GitHub, which includes some APIs available on a free tier. Specifically, the Booking API was used in this project, which facilitates both hotel and flight bookings.

  - #### [open Weather map APi](https://openweathermap.org/)
    - The project leverages an API that offers both weather information and geo location services. It features a generous free tier, which was utilized in this project.

- [Tailwind CSS](https://tailwindcss.com)

A solo-project from [scrimba](https://scrimba.com/)
