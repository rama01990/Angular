export class DataWeather{
    feelsLike:number
    wind:number
    visibility:number
    humidity:number
    pressure:number
    constructor(feels_like:number,wind:number,visibility:number,humidity:number,pressure:number){
    this.feelsLike=feels_like
    this.wind=wind
    this.visibility=visibility
    this.humidity=humidity
    this.pressure=pressure
    }
    
}