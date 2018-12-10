import { Timing } from "./timing.modal";

export class Theatre {

    theatreId:number;
    theatreName:string;
    theatreCity:string;
    theatreAddress:string;
    timings:Timing[];

    Theatre(theatreId:number, theatreName:string, theatreCity:string, theatreAddress:string, 
        timings:Timing[]) {
        this.theatreId = theatreId;
        this.theatreName = theatreName;
        this.theatreCity = theatreCity;
        this.theatreAddress = theatreAddress;
        this.timings = timings;
    }
}