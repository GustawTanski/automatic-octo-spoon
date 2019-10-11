import { List } from "antd";
import React from "react";

import Avatar from "./Avatar";
import Title from "./Title";
import Actions from "./Actions";
import "./index.css"

export default function Member({ name, position }) {
	return (
		<List.Item className="member__wrapper" actions={[<Actions />]}>
			<List.Item.Meta
				avatar={<Avatar name={name} />}
				title={<Title name={name} position={position} />}
			></List.Item.Meta>
		</List.Item>
	);
}
