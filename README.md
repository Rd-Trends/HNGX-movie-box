
<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
  - [Built With](#built-with)
- [Features](#features)
- [How To Use](#how-to-use)

<!-- OVERVIEW -->

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [Nextjs](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org)
- [TailwindCSS](https://tailwindcss.com/)
- [React-query - for data fetching](https://tanstack.com/query/latest/)
  
## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a HNGX frontend track stage two task. The task was to build an application to complete the given user stories.

- User can see a list of top 10 trending movies
- User can search for movies
- User can see the details of a movie
- User can visit a page for a particular movie
- User can watch trailers of movies
## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/rd-trends/HNGX-movie-box.git
```

create a .env.local file in your root directory and add the following environment variable
visit [TMDB](https://www.themoviedb.org/) to get your access token

```env
NEXT_PUBLIC_ACCESS_TOKEN=your_api_access_token
```

```bash
# Install dependencies
$ yarn install or npm install

# Run the app
$ yarn dev or npm run dev
```