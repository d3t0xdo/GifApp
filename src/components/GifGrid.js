import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {	

	const { loading, data: images } = useFetchGifs( category );

	return (
		<>
			<h3 className="category_name animate__animated animate__bounce">{ category }</h3>

			{ loading && <p>Loading...</p> }

			<div className="cards">	
				{
					images.map( img => (
						<GifGridItem 
							key={ img.id }
							{...img}
						/>
					))
				}
			</div>
		</>
	)
}
