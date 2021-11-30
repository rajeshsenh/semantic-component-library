import React from 'react';
import { Input, Form } from 'semantic-ui-react';

class CxTextField extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: this.props.error ? this.props.error : false,
			prevValue: this.props.value ? this.props.value : '',
		};
	}

	isASCII = (string) => /^[\x20-\x7F]*$/.test(string);

	handleChange = (e, data) => {
		const { onChange } = this.props;
		const { prevValue, error } = this.state;
		// if (this.isASCII(data.value)) {
		// 	this.setState({ error: false, prevValue: data.value });
		// } else {
		// 	this.setState({ error: true, prevValue: data.value });
		// }
		this.setState({ error: true, prevValue: data.value });
		if (onChange) onChange(e, { ...this.props, prevValue, error, value: data.value });
	};

	render() {
		const { error } = this.state;
		const { disabled, placeholder, value, label } = this.props;
		return (
			<Form.Field>
				<label>{label}</label>
				<Input
					error={error}
					disabled={disabled}
					value={value}
					onChange={this.handleChange}
					placeholder={placeholder}
				/>
			</Form.Field>
		);
	}
}

export default CxTextField;
