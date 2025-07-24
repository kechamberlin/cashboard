export type Geolocation = {
  location: {
    lat: number;
    lng: number;
  };
  accuracy: number;
};

export type Weather = {
  currentTime: string;
  timeZone: {
    id: string;
  };
  isDaytime: boolean;
  weatherCondition: {
    iconBaseUri: string;
    description: {
      text: string;
      languageCode: string;
    };
    type: string;
  };
  temperature: {
    degrees: number;
    unit: 'FAHRENHEIT' | 'CELSIUS';
  };
  feelsLikeTemperature: {
    degrees: number;
    unit: 'FAHRENHEIT' | 'CELSIUS';
  };
  dewPoint: {
    degrees: number;
    unit: 'FAHRENHEIT' | 'CELSIUS';
  };
  heatIndex: {
    degrees: number;
    unit: 'FAHRENHEIT' | 'CELSIUS';
  };
  windChill: {
    degrees: number;
    unit: 'FAHRENHEIT' | 'CELSIUS';
  };
  relativeHumidity: number;
  uvIndex: number;
  precipitation: {
    probability: {
      percent: number;
      type: string;
    };
    snowQpf: {
      quantity: number;
      unit: string;
    };
    qpf: {
      quantity: number;
      unit: string;
    };
  };
  thunderstormProbability: number;
  airPressure: {
    meanSeaLevelMillibars: number;
  };
  wind: {
    direction: {
      degrees: number;
      cardinal: string;
    };
    speed: {
      value: number;
      unit: string;
    };
    gust: {
      value: number;
      unit: string;
    };
  };
  visibility: {
    distance: number;
    unit: string;
  };
  cloudCover: number;
  currentConditionsHistory: {
    temperatureChange: {
      degrees: number;
      unit: 'FAHRENHEIT' | 'CELSIUS';
    };
    maxTemperature: {
      degrees: number;
      unit: 'FAHRENHEIT' | 'CELSIUS';
    };
    minTemperature: {
      degrees: number;
      unit: 'FAHRENHEIT' | 'CELSIUS';
    };
    snowQpf: {
      quantity: number;
      unit: string;
    };
    qpf: {
      quantity: number;
      unit: string;
    };
  };
};
