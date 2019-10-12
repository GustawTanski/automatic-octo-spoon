import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import "./Nav.css";

export default function Nav() {
	const history = useSelector(state => state.history);
	const [current, setCurrent] = useState(history.location.pathname.slice(1));
	const onClick = useCallback(e => {
		setCurrent(e.key);
	}, []);

	return (
		<div className="nav__wrapper">
			<Logo />
			<Menu onClick={onClick} mode="horizontal" selectedKeys={[current]} className="nav__nav">
				<Menu.Item key="team">
					<Link to="/team">Team</Link>
				</Menu.Item>
				<Menu.Item key="feed">
					<Link to="/feed">Feedback</Link>
				</Menu.Item>
				<Menu.Item key="wall">
					<Link to="/wall">Wall</Link>
				</Menu.Item>
			</Menu>
		</div>
	);
}
