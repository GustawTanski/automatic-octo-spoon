import React from "react";
import { Avatar } from "antd";

import "./Avatar.css";

export default function MemberAvatar({
	name,
	color: { bg = "#aaa", font = "#111" },
	size = "large"
}) {
	return (
		<div className="member__avatar">
			<Avatar size={size} style={{ backgroundColor: bg, color: font }} shape="square">
				{name[0].toUpperCase()}
			</Avatar>
		</div>
	);
}
