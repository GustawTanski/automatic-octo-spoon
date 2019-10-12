import { List } from "antd";
import React from "react";

import Avatar from "./Avatar";
import Title from "./Title";
import Actions from "./Actions";
import useColor from "../../../hooks/useColor.js";
import "./index.css";

export default function Member({ name, position, chef, id }) {
	const color = useColor(name);
	return (
		<List.Item className="member__wrapper" actions={[<Actions color={color} id={id} name={name} />]}>
			<List.Item.Meta
				avatar={<Avatar name={name} color={color} />}
				title={<Title name={name} position={position} chef={chef} color={color} />}
			></List.Item.Meta>
		</List.Item>
	);
}
