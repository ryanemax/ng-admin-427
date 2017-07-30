import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {
    isLogined: false;
 movies: Array<any>= [
    {
        'id': 1,
        'name': '敦刻尔克',
        'categor': 'Drama',
        'countryRegion': 'USA',
        'frequency': 0,
        'degree': 55
    },
    {
        'id': 1,
        'name': '濑户内海',
        'categor': 'Comedy',
        'countryRegion': 'JPN',
        'frequency': 2,
        'degree': 55
    },
    {
        'id': 1,
        'name': '哭声',
        'categor': 'Thriller',
        'countryRegion': 'KOR',
        'frequency': 1,
        'degree': 55
    }
];

    constructor() {

    }
    delete(obj) {
        let id = obj.id;
        this.movies.forEach((item, index, array) => {
        if (item.id == id) {
            array.splice(index, 1);
        }
        });
    }
    search(type, value) {
        this.movies.sort((a, b) => {
        let result1 = String(a[type]).match(value);
        let result2 = String(b[type]).match(value);

        return Number(result2) - Number(result1);
        });
    }
    deleteChecked() {
        let checkList = this.movies.filter(item => item.check == true );
        checkList.forEach(item => {
            this.delete(item);
        });
    }
    getMovies() {
        return this.movies;
    }

}

