# Fyle Internship!

This project is done by Shreya Patike intended towards the assigment for the company Fyle.


# Description

Design a website that displays the public Github repositories belonging to any specific user.

## Deploy URL
vercel: https://fyle-project-kkg1.vercel.app

## Assumptions

1. For the frontend, only html, css and js should be used. We can use bootstrap for ui.
2. As the pagination should be done on server-side (mentioned in the assignment), a node server should be run to handle apis.
3. So nodejs is used as server.

## Additional features

1. Handled edge cases when user is not found, no repos present
2. Handeled api errors(downtime or 5xx errors) with try and catch in node server.
3. Instead of fetching all the repos at one and filtering in server, used github api's paginated url to fetch details using pageNumber and pageSize
