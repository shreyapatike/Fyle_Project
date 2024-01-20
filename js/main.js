import { Octokit, App } from "https://esm.sh/octokit";


const octokit = new Octokit({
  auth: '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'
});

const form = document.getElementById("userSubmitForm");
form.addEventListener("submit", (event) => fetchGithubDetails(event))

async function fetchGithubDetails(event) {
  event.preventDefault();

  const res = await octokit.request(`GET /users/${event.target[0].value}/`);
  console.log(res)
}



