import React from 'react';
import 'animate.css';
import PropTypes from 'prop-types';

export const GifGridItem = ({ title, url }) => {

	return (
		<div className="card">
			<img src={ url } alt={ title } className="card_image"></img>	
			<div className="card_overlay">
				<div className="card_header">
					<div className="card_header_text">
						<h3 className="card__title">{ title }</h3>
					</div>
				</div>
			</div>
		</div>
	)
}

GifGridItem.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired
}