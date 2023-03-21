import { Injectable } from '@nestjs/common';
import { Octokit } from '@octokit/rest';

@Injectable()
export class AppService {
  private octokit: Octokit;

  constructor() {
    this.octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });
  }

  getHello(): string {
    return 'Hello World!';
  }

  async getGithubUser(username: string) {
    const { data } = await this.octokit.users.getByUsername({ username });
    return data;
  }

  async getPublicGists(username: string) {
    const { data } = await this.octokit.rest.gists.listForUser({ username });
    return data;
  }

  async getCommits(username: string, repo: string) {
    const { data } = await this.octokit.repos.listCommits({
      owner: username,
      repo,
    });

    return data;
  }

  async getCommitHistory(username: string, repo: string) {
    const { data } = await this.octokit.repos.listCommits({
      owner: username,
      repo,
    });
    return data;
  }

  async compareBranches(
    username: string,
    repo: string,
    base: string,
    head: string,
  ) {
    const { data } = await this.octokit.rest.repos.compareCommits({
      owner: username,
      repo,
      base,
      head,
    });
    return data;
  }

  async getBranches(username: string, repo: string) {
    const { data } = await this.octokit.request(
      `GET /repos/{owner}/{repo}/branches`,
      {
        owner: username,
        repo,
      },
    );
    return data;
  }
}
