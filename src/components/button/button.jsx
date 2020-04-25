import React from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';

const Button = ({ text, handler, ariaLabel, className }) => {
	const buttonClasses = classNames('button', [styles.btn, className]);
	return (
		<button
			type='button'
			aria-label={ariaLabel}
			className={buttonClasses}
			onClick={handler}>
			{text}
		</button>
	);
};

export default Button;
