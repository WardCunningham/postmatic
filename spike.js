// Test the github octokit api from deno
// Usage: export SKEY='...'; deno run --allow-env --allow-net spike.js

import { Octokit, App } from "https://cdn.skypack.dev/octokit?dts";
const skey = Deno.env.get('SKEY')
const octokit = new Octokit({ auth:skey });
const {data:{ login }} = await octokit.rest.users.getAuthenticated();
const result = await octokit.rest.issues.create({
  owner: login,
  repo: "postmatic",
  title: "Hello, world!",
  body: "I created this issue using Octokit!",
});
console.log(result)