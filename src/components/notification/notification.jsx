import React from 'react';
import classNames from 'classnames';

const Notification = ({ text, type }) => {
	const notRef = React.useRef(null);
	const notificationClass = classNames('notification is-light', [type]);
	const onClose = () => notRef.current.parentNode.removeChild(notRef.current);
	return (
		<div className={notificationClass} ref={notRef}>
			<button
				type='button'
				onClick={onClose}
				className='delete'
				aria-label='close'
			/>
			{text}
		</div>
	);
};

export default Notification;
