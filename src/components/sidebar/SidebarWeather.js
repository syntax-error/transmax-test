import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun, faSun, faCloud, faCloudShowersHeavy } from "@fortawesome/free-solid-svg-icons";
import './SidebarWeather.css';

const eForecastDay = {
    Today: 'today',
    Tomorrow: 'tomorrow'
}

const WeatherIcons = {
    sunny: faSun,
    cloudy: faCloudSun,
    overcast: faCloud,
    raining: faCloudShowersHeavy
}

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
    weekday: 'short',
    day: 'numeric'
});
const timeFormatter = new Intl.DateTimeFormat('en-GB', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
});
const getDateSuffix = (number) => {
    if (number % 10 === 1 && number !== 11) {
        return 'st';
    }
    if (number % 10 === 2 && number !== 12) {
        return 'nd';
    }
    if (number % 10 === 3 && number !== 13) {
        return 'rd';
    }
    return 'th';
}

class SidebarWeather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            location: 'Melbourne',
            forecast: {
                [eForecastDay.Today]: {
                    weather: 'cloudy',
                    temperature: 32,
                    humidity: .78,
                    rainChance: .34,
                    windSpeed: 21,
                    windSpeedUnits: 'kmh'
                },
                [eForecastDay.Tomorrow]: {
                    weather: 'sunny',
                    temperature: 30,
                    humidity: .74,
                    rainChance: .02,
                    windSpeed: 14,
                    windSpeedUnits: 'kmh'
                }
            }
        }
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tickDate(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tickDate () {
        this.setState({ date: new Date() });
    }
    getDate () {
        const date = dateFormatter.format(this.state.date);
        const time = timeFormatter.format(this.state.date).toUpperCase();
        const suffix = getDateSuffix(this.state.date.getDate());
        return `${date}${suffix} ${time}`;
    }
    getTemperature (forecastDay) {
        return this.state.forecast[forecastDay].temperature + '\u00B0';
    }
    getHumidity (forecastDay) {
        return Math.round(this.state.forecast[forecastDay].humidity * 100) + '%';
    }
    getRainChance (forecastDay) {
        return Math.round(this.state.forecast[forecastDay].rainChance * 100) + '%';
    }
    getWindSpeed (forecastDay) {
        const forecast = this.state.forecast[forecastDay];
        return `${forecast.windSpeed} ${forecast.windSpeedUnits}`;
    }
    getWeatherIcon (forecastDay) {
        const forecast = this.state.forecast[forecastDay];
        return WeatherIcons[forecast.weather];
    }
    render () {
        return (
            <div className="Sidebar-Weather">
                <div>
                    <div className="Sidebar-Weather-today">
                        <div className="Sidebar-Weather-today-data">
                            <div>
                                <div className="Sidebar-Weather-location">
                                    { this.state.location }
                                </div>
                                <div className="Sidebar-Weather-temperature">
                                    { this.getTemperature(eForecastDay.Today) }
                                </div>
                                <div className="Sidebar-Weather-datetime">
                                    { this.getDate() }
                                </div>
                            </div>
                        </div>
                        <div className="Sidebar-Weather-today-icon">
                            <FontAwesomeIcon icon={this.getWeatherIcon(eForecastDay.Today)} />
                        </div>
                    </div>
                    <div className="Sidebar-Weather-row">
                        <div className="Sidebar-Weather-label">
                            Humidity
                        </div>
                        <div className="Sidebar-Weather-data">
                            { this.getHumidity(eForecastDay.Today) }
                        </div>
                    </div>
                    <div className="Sidebar-Weather-row">
                        <div className="Sidebar-Weather-label">
                            Chance of Rain
                        </div>
                        <div className="Sidebar-Weather-data">
                            { this.getRainChance(eForecastDay.Today) }
                        </div>
                    </div>
                    <div className="Sidebar-Weather-row">
                        <div className="Sidebar-Weather-label">
                            Wind Speed
                        </div>
                        <div className="Sidebar-Weather-data">
                            { this.getWindSpeed(eForecastDay.Today) }
                        </div>
                    </div>
                    <div className="Sidebar-Weather-row">
                        <div className="Sidebar-Weather-label">
                            Tomorrow
                        </div>
                        <div className="Sidebar-Weather-data">
                            { this.getTemperature(eForecastDay.Tomorrow) }
                            <FontAwesomeIcon icon={this.getWeatherIcon(eForecastDay.Tomorrow)} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SidebarWeather;