import React, { Component } from 'react';
import './App.css';
import Form from './Form';
// import Result from './Result';
import LocationDate from './LocationDate';
import CurrentTemp from './CurrentTemp';
import CurrentStats from './CurrentStats';
import NextDays from './NextDays';
const APIKey = 'cd89e16113fe3e44eacf3e7726ef8614';
const APIBaseUrl = 'https://api.openweathermap.org/data/2.5/';

class App extends Component {
  state = {
    value: '',
    err: '',
    err2: '',

    locationDate: {
			currentTime: new Date(),
			city: '',
			country: '',
		},
		currentWeather: {
			sunrise: '',
			sunset: '',
			temp: '',
			tempMax: '',
			tempMin: '',
			pressure: '',
			wind: '',
			icon: '',
			description: '',
		},

		forecast: {
			days: [],
		},
	};
	debounceTimeout = 0;

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

	handleForecastCall = (coords) => {
		const { lat, lon } = coords || {};

		if (!(lat && lon)) {
			return;
		}

		fetch(`${APIBaseUrl}onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${APIKey}&units=metric&lang=en`)
			.then((response) => {
				if (response.ok) {
					return response;
				}
				throw Error(`Fail. Didn't find the city:"${this.state.value}"`);
			})
			.then((response) => response.json())
			.then((data2) => {
				console.log('API 2:');
				console.log(data2);

				const days = data2.daily;
				this.setState({
					err: false,
					forecast: {
						days: [...days],
					},
				});
			})
			.catch((err2) => {
				console.log('error2');
				this.setState((prevState) => ({
					err2: true,
				}));
			});
	}

	handleLocalizationCall = () => fetch(
		`${APIBaseUrl}weather?q=${this.state.value}&appid=${APIKey}&units=metric`
	)
		.then((response) => {
			if (response.ok) {
				return response;
			}
			throw Error(`Fail. Didn't find the city:"${this.state.value}"`);
		})
		.then((response) => response.json())
		.then((data) => {
			console.log('API 1:');
			console.log(data);
			const time = new Date();
			this.setState((prevState) => ({
				err: false,
				locationDate: {
					currentTime: time,
					city: prevState.value,
					country: data.sys.country,
				},
				currentWeather: {
					sunrise: data.sys.sunrise,
					sunset: data.sys.sunset,
					temp: Math.round(data.main.temp),
					tempMax: Math.round(data.main.temp_max),
					tempMin: Math.round(data.main.temp_min),
					pressure: data.main.pressure,
					wind: Math.round(data.wind.speed),
					icon: data.weather[0].icon,
					description: data.weather[0].description,
				},
			}));
			return {
				lat: data.coord.lat,
				lon: data.coord.lon,
			};
		})
		.catch((err) => {
			console.log('error1');
			this.setState((prevState) => ({
				err: true,
				currentWeather: {
					city: prevState.value,
				},
			}));
		});

	componentDidUpdate(prevProps, prevState) {
		if (this.state.value.length < 2 && this.state.value.length !== 0) return;
		if (prevState.value !== this.state.value) {
			clearTimeout(this.debounceTimeout);
			this.debounceTimeout = setTimeout(() => 
				this.handleLocalizationCall().then(this.handleForecastCall),
				250
			);
		}
	}

	render() {
		let result = null;
		if (!this.state.err && this.state.locationDate.city) {
			result = (
				<>
					<LocationDate locationDate={this.state.locationDate} error={this.state.err} />
					<CurrentTemp weather={this.state.currentWeather} />
					<CurrentStats weather={this.state.currentWeather} />
					<NextDays locationDate={this.state.locationDate} forecast={this.state.forecast} />
				</>
			);
		}
		return (
			<div className="App">
				<Form
					value={this.state.value}
					change={this.handleInputChange}
					submit={this.handleCitySubmit}
				/>
				<div className="result">
					{this.state.err
						? `in our database there is no city: ${this.state.value}`
						: result}
				</div>
			</div>
		);
	}
}

export default App;
