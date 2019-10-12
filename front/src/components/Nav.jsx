import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

export default function Nav() {
	const [current, setCurrent] = useState();

	return (
		<Menu mode="horizontal">
			<Menu.Item key="team">
				<Link to="/team">Team</Link>
			</Menu.Item>
			<Menu.Item key="feed">
				<Link to="/feed">Feedback</Link>
			</Menu.Item>
		</Menu>
	);
}
