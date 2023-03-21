// tempalte service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private http: HttpClient) { }

    getUserData(username: string) {
        return this.http.get(`http://localhost:3000/github-user`);
    }

    getCommits() {
        return this.http.get(`http://localhost:3000/commits`);
    }

    getCommitHistory() {
        return this.http.get(`http://localhost:3000/commit-history`);
    }

    getBranches() {
        return this.http.get(`http://localhost:3000/branches`);
    }

    compareBranches(branch1: string, branch2: string) {
        return this.http.get(`http://localhost:3000/compare-branches/${branch1}/${branch2}`);
    }
}