import React from 'react';
import { Button } from 'semantic-ui-react';

const CxButton = (props) => {
	return <Button>{props.children}</Button>;
};

export default CxButton;
