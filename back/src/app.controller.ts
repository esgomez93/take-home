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
    return this.appService.getCommits(
      'esgomez93',
      'https://github.com/esgomez93/take-home.git',
    );
  }

  
  @Get('commit-history')
  async getCommitHistory() {
    return this.appService.getCommitHistory(
      'esgomez93',
      'https://github.com/esgomez93/take-home.git',
    );
  }


  @Get('compare-branches')
  async compareBranches() {
    return this.appService.compareBranches(
      'esgomez93',
      'https://github.com/esgomez93/take-home.git',
      'master',
      'dev',
    );
  }


  @Get('branches')
  async getBranches() {
    return this.appService.getBranches(
      'esgomez93',
      'https://github.com/esgomez93/take-home.git',
    );
  }

}
