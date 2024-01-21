require('dotenv').config
const { Octokit } = require("octokit");

const octokit = new Octokit({
    'auth': process.env.GITHUB_PAT
});

const pageSize = 9;

const getUser = async (userName, pageNumber = 1) => {
    try {
        const res = await octokit.request(`GET /users/${userName}`);
        if (res.status === 200) {
            const repos = await getRepos(userName, 1);
            if (!repos.status) {
                throw new Error('Failed to fetch repositories');
            }
            const publicReposCount = res.data?.public_repos || 0;
            const numberOfPages = Math.ceil(publicReposCount / pageSize);
            const finalData = {...res.data, reposData: repos.data, numberOfPages, currentPage: pageNumber};

            return {
                "status": true,
                "data": finalData
            };
        } else {
            return {"status": false, "error": `User fetch failed with status code: ${res.status}`};
        }
    } catch (error) {
        return {"status": false, "error": error.message};
    }
};

const getRepos = async (userName, pageNumber) => {
    try {
        const res = await octokit.request(`GET /users/${userName}/repos?per_page=${pageSize}&page=${pageNumber}`);
        if (res.status === 200) {
            return {
                "status": true,
                "data": res.data
            };
        } else {
            return {"status": false, "error": `Repositories fetch failed with status code: ${res.status}`};
    }
    } catch (error) {
        return {"status": false, "error": error.message};
    }
};
// const get

module.exports = {getUser};