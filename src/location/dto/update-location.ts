export class UpdateLocationDto{
    locationId : string;
    address? : string;
    name? : string;
    desc? : string;
    lat : number;
    long : number;
    logoUrl? : string;
    images? : [string];
}