import React from 'react';

function Lightbox({ name, toggle, show }) {
	return (
		<div className="lightbox">
			{/** Exit bottom for desktop */}
			<div className="times hide-sm">
				<i onClick={() => toggle(!show)} className="fas fa-times"></i>
			</div>
			{/** Exit bottom for mobile, if name includes mobile, change position */}
			<div className={`${name.includes('mobile') ? 'times-y-mobile show-sm' : 'times-y show-sm'}`}>
				<i onClick={() => toggle(!show)} className="fas fa-times"></i>
			</div>
			{/** Img to show */}
			<div className={`${name.includes('mobile') ? 'lightbox-img-mobile' : 'lightbox-img'}`}>
				<img src={require(`../img/${name}`)} />
			</div>
		</div>
	);
}

export default Lightbox;
