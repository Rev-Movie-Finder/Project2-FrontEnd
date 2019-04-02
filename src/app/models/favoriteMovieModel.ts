export interface FavoriteMovy {
  id: number;
}

export interface FavoriteMovieModel {
  id: number;
  email: string;
  username: string;
  password: string;
  birthday?: any;
  favoriteMovies: FavoriteMovy[];
  wishList: any[];
}
