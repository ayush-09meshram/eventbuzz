export  interface IMovie
{
movieId: number,
movieTitle:string,
yearOfRelease:string,
posterUrl:string,
ratingArray:Array<number>,
averageRating:number,
language: string,
certificate: string,
director: string
cast: string[],
genre: Array<string>    
}