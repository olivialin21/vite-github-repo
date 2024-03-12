import axios from "axios";

const githubRequest = axios.create({
  baseURL: "https://api.github.com/",
});

export const apiGetUserData = (userName) =>
  githubRequest.get(`/users/${userName}`, {
    headers: {
      Authorization: "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",
    },
  });

export const apiGetGithubRepos = ({ userName, page }) =>
  githubRequest.get(
    `/users/${userName}/repos?page=${page}&per_page=10&sort=pushed`,
    {
      headers: {
        Authorization: "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",
      },
    }
  );
