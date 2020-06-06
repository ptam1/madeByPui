import React, { Component } from 'react';
import './BackgroundImage.css';

export default class HomePagePic extends Component {
	render() {
		return (		
				<img className="backgroundImage" src={"/keyboard.jpg"} alt={"Background"} />
		)
	}
}