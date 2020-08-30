import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class profileService{
    username: string;
    repositoryName: string;
    clientId: string = ''
}
