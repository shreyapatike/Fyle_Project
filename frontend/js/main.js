import { Octokit, App } from "https://esm.sh/octokit";


const octokit = new Octokit({
  auth: ''
});

const form = document.getElementById("userSubmitForm");
form.addEventListener("submit", (event) => fetchGithubDetails(event))

async function fetchGithubDetails(event) {
  event.preventDefault();

  const res = await octokit.request(`GET /users/${event.target[0].value}/`);
  console.log(res)
}



