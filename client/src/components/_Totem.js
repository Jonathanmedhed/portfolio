import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';

function Totem({ inceptionLevel }) {
	// To show totem spinning
	let [start, setStart] = useState(false);
	// To show totem wobbling left
	let [wobbleLeft, setWobbleLeft] = useState(false);
	// To show totem wobbling right
	let [wobbleRight, setWobbleRight] = useState(false);

	// Start totem animation
	const startSpinning = () => {
		// show spinning totem only if inception level > 0
		if (inceptionLevel > 0) {
			setStart(true);
		} else {
			// Show spinning, wobbling and stop
			setTimeout(function () {
				setStart(true);
			}, 500);
			setTimeout(function () {
				setWobbleLeft(true);
			}, 2500);
			setTimeout(function () {
				setWobbleRight(true);
			}, 3500);
			setTimeout(function () {
				setStop();
			}, 4500);
		}
	};

	// Stop totem
	const setStop = () => {
		setStart(false);
		setWobbleLeft(false);
		setWobbleRight(false);
	};

	return (
		<div data-tip={start === true ? 'Stop' : 'Spin'} className="spinner">
			{/** Tooltip */}
			<ReactTooltip />
			{/** Spinning totem */}
			{start === true && wobbleLeft === false && wobbleRight === false && (
				<img onClick={() => setStop()} src={require('../img/totem.gif')}></img>
			)}
			{/** Wobbling left totem */}
			{start === true && wobbleLeft === true && wobbleRight === false && (
				<img onClick={() => setStop()} src={require('../img/totem-left.gif')}></img>
			)}
			{/** Wobbling right totem */}
			{start === true && wobbleLeft === true && wobbleRight === true && (
				<img onClick={() => setStop()} src={require('../img/totem-right.gif')}></img>
			)}
			{/** Stopped totem */}
			{start === false && <img onClick={() => startSpinning()} src={require('../img/totem-stopped.png')}></img>}
		</div>
	);
}

export default Totem;
