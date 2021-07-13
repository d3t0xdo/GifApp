import React from 'react'
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Test of the component GifGridItem', () => {
	
	test('Test of the return in the component', () => {
		
		const testUrl = "https://google.com";
		const testTitle = "Title of the component";

		const wrapper = shallow( <GifGridItem />);
		expect( wrapper ).toMatchSnapshot();

	});
	
});
