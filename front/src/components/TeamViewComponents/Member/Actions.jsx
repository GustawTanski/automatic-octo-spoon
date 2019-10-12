import React, { useCallback, useState, useEffect } from "react";
import { Icon, Button } from "antd";
import showFeedbackModal from "../../FeedbackModal/index";

import "./Actions.css";

export default function Actions({ color: { bg = "", font = "" } = {}, name = "", id = "" }) {
	const onKeyDown = useCallback(
		event => {
			if (event.keyCode == 13) {
				showFeedbackModal(name, id);
			}
		},
		[name, id]
	);
	const [width, setWidth] = useState(window.innerWidth);
	const windowResize = useCallback(event => {
		setWidth(window.innerWidth);
	});

	const onPointerDown = useCallback(
		event => {
			showFeedbackModal(name, id);
		},
		[name, id]
	);
	useEffect(() => {
		window.addEventListener("resize", windowResize);
		return () => {
			window.removeEventListener("resize", windowResize);
		};
	});
	return (
		<div className="member__actions">
			{width <= 425 ? (
				<Icon tabIndex={0} type="down" onPointerDown={onPointerDown} onKeyDown={onKeyDown} />
			) : (
				<Button
					tabIndex={0}
					type="primary"
					onPointerDown={onPointerDown}
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
