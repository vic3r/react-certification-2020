import React from 'react';
import VideoContext from '../../state/VideoContext';
import { render } from '@testing-library/react';

import Home from '.';

test("renderes the Home content", () => {
    const { getByText } = render(
			<VideoContext.Provider
				value={{ videos:[], colorState:true}}
			>
				<Home />
      </VideoContext.Provider>)
    
    getByText('WELCOME');
});
