import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { Menu } from "antd";
import { Link } from "react-router-dom";

export default function Nav() {
	const history = useSelector(state => state.history);
	const [current, setCurrent] = useState(history.location.pathname.slice(1));
	const onClick = useCallback(e => {
		setCurrent(e.key);
	}, []);

	return (
		<Menu
			onClick={onClick}
			mode="horizontal"
			selectedKeys={[current]}
			style={{ alignSelf: "flex-end" }}
		>
			<Menu.Item key="team">
				<Link to="/team">Team</Link>
			</Menu.Item>
			<Menu.Item key="feed">
				<Link to="/feed">Feedback</Link>
			</Menu.Item>
		</Menu>
	);
}
