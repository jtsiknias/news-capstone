# Politico News Clone

Site: https://politico-clone.netlify.app/


The website mimics the Politico news site, and aggregates news articles about current topics.

## Tech Stack & Features implemented:
**React Router** - each category in the top nav is passed in as the search query to the API when a user clicks on it, which then fetches the relevant articles and renders them on a new landing page component. React Router utilizes the History API to keep the UI in sync with the URL.

**Axios** to make the API call and fetch the news articles.

**Bootstrap 4** is used as the CSS framework to minimize time spent on styling, and for its ease-of-use in setup.

**react-promise-tracker** package was used to track the promise while fetching the API via Axios. This was implemented to display to the user that the page is loading, rather than a blank page while the API response is being fetched.

## Tests
