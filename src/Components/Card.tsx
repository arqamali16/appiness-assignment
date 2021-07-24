import React from 'react';

const Card = (props: any) => {
	return <div className='card-body'>{props.children}</div>;
};

export default Card;
