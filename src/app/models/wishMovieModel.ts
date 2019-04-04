export interface WishMovy {
    id: number;
  }
  
  export interface WishMovieModel {
    id: number;
    email: string;
    username: string;
    password: string;
    birthday?: any;
    wishMovies: WishMovy[];
    wishList: any[];
  }
  ``