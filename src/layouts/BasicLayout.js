import PropTypes from 'prop-types';
import React from 'react';
import NavBar from '../components/NavBar';

function BasicLayout(props) {
	const { children } = props;
	return (
		<>
			<NavBar />
			<div className="pt-24">
				{children}
			</div>
		</>
	);
}

BasicLayout.propTypes = {
	children: PropTypes.shape.isRequired
};

export default BasicLayout;
