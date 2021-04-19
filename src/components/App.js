import React, { Component } from 'react';
import './App.css';
import Form from './Form';
// import Result from './Result';
import LocationDate from './LocationDate';
import CurrentTemp from './CurrentTemp';
import CurrentStats from './CurrentStats';
import NextDays from './NextDays';
const APIKey = 'cd89e16113fe3e44eacf3e7726ef8614';

class App extends Component {
	state = {
		value: '',
		err: '',

		locationDate: {
			currentTime: new Date(),
			city: '',
			country: '',
			lat: '',
			lon: '',
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

		forecastDay1: {
			currentTime: new Date(),
		},
	};

	handleInputChange = (e) => {
		this.setState({
			value: e.target.value,
		});
	};

	componentDidUpdate(prevProps, prevState) {
		let lat = this.state.locationDate.lat;
		let lon = this.state.locationDate.lon;
		// if (this.state.value.length < 1) return;
		if (prevState.value !== this.state.value) {
			// const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;
			const API = `http://api.openweathermap.org/data/2.5/weather?q=Sidney&appid=${APIKey}&units=metric&lang=en`;

			const API2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${APIKey}&units=metric&lang=en`;

			// API - current Weather
			fetch(API)
				.then((response) => {
					if (response.ok) {
						return response;
					}
					throw Error(`Fail. Didn't find the city:"${this.state.value}"`);
				})
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					const time = new Date();
					this.setState((prevState) => ({
						err: false,

						locationDate: {
							currentTime: time,
							city: prevState.value,
							country: data.sys.country,
							lat: data.coord.lat,
							lon: data.coord.lon,
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
				}) //objekt z informacjami o pogodzie
				.catch((err) => {
					this.setState((prevState) => ({
						err: true,
						currentWeather: {
							city: prevState.value,
						},
					}));
				});

			// API2 - hourly, daily forecast
			fetch(API2)
				.then((response) => {
					if (response.ok) {
						return response;
					}
					throw Error(`Fail. Didn't find the city:"${this.state.value}"`);
				})
				.then((response) => response.json())
				.then((data2) => {
					console.log('wywołało API 2');
					console.log(data2);
					this.setState((prevState) => ({
						err: false,

						forecastDay1: {
							currentTime: data2.daily[0].dt,
						},
					}));
					console.log(this.state.forecastDay1.currentTime);
				}) //objekt z informacjami o pogodzie
				.catch((err) => {
					console.log('error');
					this.setState((prevState) => ({
						err: true,
						currentWeather: {
							city: prevState.value,
						},
					}));
				});
		}
	}

	render() {
		return (
			<div className="App">
				<Form
					value={this.state.value}
					change={this.handleInputChange}
					submit={this.handleCitySubmit}
				/>
				<LocationDate locationDate={this.state.locationDate} error={this.state.err} />
				<CurrentTemp weather={this.state.currentWeather} />
				<CurrentStats weather={this.state.currentWeather} />
				<NextDays locationDate={this.state.locationDate} day1={this.state.forecastDay1} />
				{/* <Result
					error={this.state.err}
					weather={this.state.currentWeather}
					locationDate={this.state.locationDate}
				/> */}
			</div>
		);
	}
}

export default App;
