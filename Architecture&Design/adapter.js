"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class OldWeatherService {
    constructor() {
        this.mockedData = {
            temp: 20,
            loc: 'Germany',
            rain: false,
        };
    }
    fetch() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((res) => {
                setTimeout(() => res(this.mockedData), 1000);
            });
        });
    }
}
class WeatherAdapter {
    constructor(oldService) {
        this.oldService = oldService;
    }
    getCurrentWeather() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.oldService.fetch();
            return {
                temperature: data.temp,
                location: data.loc,
                rain: data.rain,
            };
        });
    }
}
// Testing
const oldService = new OldWeatherService();
const weatherClient = new WeatherAdapter(oldService);
weatherClient.getCurrentWeather().then((weather) => {
    console.log(weather);
    // Output after 1 second:
    // { temperature: 22, condition: 'Sunny with a chance of code' }
});
