import React  from "react";
import Member from "../Member";
import { List } from "antd";

export default function MemberList({ members }) {
	return (
		<List bordered>
			{members.map(({ name, position }) => (
				<Member key={name} name={name} position={position} />
			))}
		</List>
	);
}
