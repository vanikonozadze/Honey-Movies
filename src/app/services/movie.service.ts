import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private baseUrl = 'https://api.themoviedb.org/3';
  private apiKey = '3fd2be6f0c70a2a598f084ddfb75487c';

  constructor(private http: HttpClient) {}

  getPopularMovies(page: number): Observable<any> {
    const url = `${this.baseUrl}/discover/movie`;
    return this.http.get<any>(url, {
      params: {
        sort_by: 'popularity.desc',
        api_key: this.apiKey,
        page: page.toString(),
      },
    });
  }
}
