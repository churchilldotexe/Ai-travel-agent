# Ai Travel Agent

## TODOS:

- [x] home, travelForm, travelDetails,pages UI
- [x] setup server action with form try using Reacthook form
- [x] use Weather API for weather, geolocation and try using hotel and flight booking.. if cant Prompt openAI to get data
- [] use Ai prompting with JSON as result
- [] push all to a array of object and get ID as query params to be use in travelInfo
- [] create booked flight/hotel page use dynamic routes
- [] fix loading states for form, and all other pages (use animation this time )
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

there will be a linting and ts check every commit to ensure a typesafe codebase before pushing the code to github

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
  - openAI - [openAi api docs](https://platform.openai.com/docs/introduction)
    -rapidApi with booking Com - [Booking COM](https://rapidapi.com/ntd119/api/booking-com18)
  - [open Weather map APi](https://openweathermap.org/)
- [Tailwind CSS](https://tailwindcss.com)

A solo-project from [scrimba](https://scrimba.com/)
