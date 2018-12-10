import { Category } from "./category.modal";

export class Timing {
    showId:string;
    showTime:string;
    categories:Category[];

    Timing(showTime:string, showId:string, categories:Category[]) {
         this.showTime = showTime;
         this.showId = showId;
         this.categories = categories;
    }
}