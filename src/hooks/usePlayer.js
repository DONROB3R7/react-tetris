import { useState } from 'react';

import { randomTetromino } from '../tertrominos'

export const usePlayer = () => {
	const [player, setPlayer] = useState({
		pos: {x:0 , y:0 },
		tertrominos: randomTetromino().shape,
		collided: false,
	});

	return [player];
}