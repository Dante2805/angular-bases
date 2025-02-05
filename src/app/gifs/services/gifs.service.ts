import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class GifsService {

    private _tagsHistory:   string[] = [];
    private apiKey:         string = 'DYa2fuLzcVG4RqRLknvvS3BuN8o9TOMb';
    private serviceUrl:     string = 'https://api.giphy.com/v1/gifs';

    constructor(private http: HttpClient) {}

    get tagsHistory() {
        return [...this._tagsHistory];
    }

    organizeHistory(tag: string): void {
        tag = tag.toLocaleLowerCase();

        if(this._tagsHistory.includes(tag)) {
            this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag);
        }

        this._tagsHistory.unshift(tag);

        this._tagsHistory = this.tagsHistory.splice(0, 10);
    }

    public searchTag(tag: string): void {
        if(tag.length === 0) return;
        this.organizeHistory(tag);

        const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('limit', '10')
        .set('q', tag);

        this.http.get(`${this.serviceUrl}/search`, {params})
        .subscribe(
            resp => {
                console.log(resp);
            }
        );

        // fetch('https://api.giphy.com/v1/gifs/search?api_key=DYa2fuLzcVG4RqRLknvvS3BuN8o9TOMb&q=valorant&limit=5')
        // .then(resp => resp.json())
        // .then(data => console.log(data));
    }
    
}