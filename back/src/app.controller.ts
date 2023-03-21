import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('github-user')
  async getGithubUser() {
    return this.appService.getGithubUser('esgomez93');
  }

  @Get('commits')
  async getCommits() {
    return this.appService.getCommits('esgomez93', 'take-home');
  }

  @Get('commit-history')
  async getCommitHistory() {
    return this.appService.getCommitHistory('esgomez93', 'take-home');
  }

  @Get('compare-branches')
  async compareBranches() {
    return this.appService.compareBranches(
      'esgomez93',
      'take-home',
      'main',
      'dev',
    );
  }

  @Get('branches')
  async getBranches() {
    return this.appService.getBranches('esgomez93', 'take-home');
  }

  @Get('public-gists')
  getPublicGists() {
    return this.appService.getPublicGists('esgomez93');
  }
}
