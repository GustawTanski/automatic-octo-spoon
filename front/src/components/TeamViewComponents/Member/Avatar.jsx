import React from "react";
import { Avatar } from "antd";

import "./Avatar.css";

export default function MemberAvatar({ name, color: { bg = "#aaa", font = "#111" } }) {
	return (
		<div className="member__avatar">
			<Avatar style={{ backgroundColor: bg, color: font }} size="large" shape="square">
				{name[0].toUpperCase()}
			</Avatar>
		</div>
	);
}
