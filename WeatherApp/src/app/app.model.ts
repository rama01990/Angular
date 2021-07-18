export class DataWeather{
    public feelsLike:number
    public wind:number
    public visibility:number
    public humidity:number
    public pressure:number
    constructor(feels_like:number,wind:number,visibility:number,humidity:number,pressure:number){
    this.feelsLike=feels_like
    this.wind=wind
    this.visibility=visibility
    this.humidity=humidity
    this.pressure=pressure
    }
}

export class DataWeatherHistory{
    public MaxTemp:number
    public MinTemp:number
    public humidity:number
    public hourlyData:ArrayData[]
    constructor(maxTemp:number,minTemp:number,humidity:number,hourlyData:ArrayData[]){
    this.MaxTemp=maxTemp
    this.MinTemp=minTemp
    this.humidity=humidity
    this.hourlyData=hourlyData
    }
}

export interface ArrayData{
    time:string,
    temp:number,
    humidity:number
  }
