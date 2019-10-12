import React from "react";
import { Badge } from "antd";
import "./Title.css";

export default function Title({
	name,
	position,
	chef,
	color: { bg = "red", font = "black" } = {}
}) {
	return (
		<div className="member__title">
			<div className="member__name">
				<span>{name}</span>
				{chef && <Badge count={"chef"} style={{ background: bg, color: font }} />}
			</div>
			<div className="member__position">{position}</div>
		</div>
	);
}
