import React, { useMemo } from "react";
import Color from "color";
import { Avatar } from "antd";

import toHSL from "./toHSL.js";
import "./Avatar.css";

export default function MemberAvatar({ name }) {
	const bg = useMemo(() => toHSL(name), [name]);
	const font = useMemo(() => {
		const color = Color(bg);
		if (color.isLight()) return "#2B303A";
		else return "#D8E1E9";
	}, [bg]);
	return (
		<div className="member__avatar">
			<Avatar style={{ backgroundColor: bg, color: font }} size="large" shape="square">
				{name[0].toUpperCase()}
			</Avatar>
		</div>
	);
}
