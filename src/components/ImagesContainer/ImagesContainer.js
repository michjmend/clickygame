import React, { Component, Row } from 'react';
import ClickImage from '../ClickImage';
import images from "../../images.json";
// import "./imagesContainer.css";

class imagesContainer extends Component {
	state = {
		images,
		message: "Click one of the animals to begin!",
		score: 0,
		topScore: 0
	};

	handleClick = (id, clicked) => {

		const imageOrder = this.state.images;

		if (clicked) {
			imageOrder.forEach((image, index) => {
				imageOrder[index].clicked = false;
			});
			return this.setState({
				image: imageOrder.sort(() => Math.random() - 0.5),
				message: "You Guessed Incorrectly!",
				score: 0
			})
		}
		else {
			imageOrder.forEach((image, index) => {
				if (id === image.id) {
					imageOrder[index].clicked = true;
				}
			});

			const { topScore, score } = this.state;
			const newScore = score + 1;
			const newTopScore = newScore > topScore ? newScore : topScore;

			return this.setState({
				image: imageOrder.sort(() => Math.random() - 0.5),
				message: "You Guessed Correctly!",
				score: newScore,
				topScore: newTopScore,
			})
		}
	};

	render() {
		return (
			<div className="container-fluid mainCardContainer">
			<div className="gameMessage text-center text-white">
						<h2>{this.state.message}</h2>
					</div>
					<div className="gameScores text-center text-white">
						<h2>Score: {this.state.score} | Top Score: {this.state.topScore}</h2>
					</div>
				<div className="container">

					<div className="row">
					{this.state.images.map(image => (
              <ClickImage
                key={image.id}
                id={image.id}
                name={image.name}
                clicked={image.clicked}
                image={image.image}
                handleClick={this.handleClick}
              />
					))}
					</div>

				</div>
			</div>
		);
	}
};

export default imagesContainer;
