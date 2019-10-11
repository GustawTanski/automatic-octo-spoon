import React from "react";
import "./Title.css";

export default function Title({ name, position }) {
	return (
		<div className="member__title">
			<div className="member__name">{name}</div>
			<div className="member__position">{position}</div>
		</div>
	);
}
