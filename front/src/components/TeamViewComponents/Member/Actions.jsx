import React, { useCallback, useState, useEffect } from "react";
import { Icon, Button } from "antd";
import showFeedbackModal from "../../FeedbackModal/index";

import "./Actions.css";

export default function Actions({ color: { bg = "", font = "" } = {} }) {
	const onKeyDown = useCallback(event => {
		if (event.keyCode == 13) {
			showFeedbackModal();
		}
	}, []);
	const [width, setWidth] = useState(window.innerWidth);
	const windowResize = useCallback(event => {
		setWidth(window.innerWidth);
	});
	useEffect(() => {
		window.addEventListener("resize", windowResize);
		return () => {
			window.removeEventListener("resize", windowResize);
		};
	});
	return (
		<div className="member__actions">
			{width <= 425 ? (
				<Icon tabIndex={0} type="down" onPointerDown={showFeedbackModal} onKeyDown={onKeyDown} />
			) : (
				<Button
					tabIndex={0}
					type="primary"
					onPointerDown={showFeedbackModal}
					onKeyDown={onKeyDown}
					size="small"
					style={{
						background: bg,
						color: font,
						"--bg": bg
					}}
				>
					Feedback
				</Button>
			)}
		</div>
	);
}
