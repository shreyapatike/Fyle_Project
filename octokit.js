require('dotenv').config
const { Octokit } = require("octokit");

const octokit = new Octokit({
    'auth': process.env.GITHUB_PAT
});


const getUser = async (userName) => {
    const res = await octokit.request(`GET /users/${userName}`);
    if (res.status == 200) {
        const repos = await octokit.request(`GET /users/${userName}/repos`);
        console.log(repos.data[0]);
        return {
            "status" : true,
            "data" : res.data
        }
    }
    return {"status" : false}
}

module.exports = {getUser};