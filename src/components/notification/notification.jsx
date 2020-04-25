import React from 'react';
import classNames from 'classnames';

const Notification = ({ text, type }) => {
	const containerRef = React.useRef(null);
	const notRef = React.useRef(null);
	const notificationClass = classNames('notification is-light', [type]);
	const onClose = () => containerRef.current.removeChild(notRef.current);
	return (
		<span ref={containerRef}>
			<div className={notificationClass} ref={notRef}>
				<button
					type='button'
					onClick={onClose}
					className='delete'
					aria-label='close'
				/>
				{text}
			</div>
		</span>
	);
};

export default Notification;
