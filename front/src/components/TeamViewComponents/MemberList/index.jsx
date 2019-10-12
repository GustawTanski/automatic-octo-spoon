import React from "react";
import Member from "../Member";
import { List } from "antd";
import "./index.css";

export default function MemberList({ members }) {
	return (
		<div className="member-list">
			<List>
				{members.map(({ name, position, chef, id }) => (
					<Member key={name} name={name} position={position} chef={chef} id={id} />
				))}
			</List>
		</div>
	);
}
