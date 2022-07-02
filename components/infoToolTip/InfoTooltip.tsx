import { useState } from 'react';
import styles from './InfoTooltip.module.css'

// Import this tooltip to a new component and customize

interface ToolTipProps {
	content?: any;
	children?: React.ReactNode;
	preset?: string;
	top?: string;
	bottom?: string;
	left?: string;
	right?: string;
}

const InfoTooltip = (props: ToolTipProps) => {
	const [activeMouse, setActiveMouse] = useState(false);

	const openToolTip = () => {
		setActiveMouse(true);
	};

	const closeToolTip = () => {
		setActiveMouse(false);
	};

	return (
		<><div className={styles.TTwrap} onMouseEnter={openToolTip} onMouseLeave={closeToolTip}>
            {props.children}
			{activeMouse && (
                        <div className={styles.TTinnerWrap}>
							{props.content}
							</div>
                )}
        </div></>
	);
};

export default InfoTooltip;