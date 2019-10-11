import React from "react";

import MemberList from "../TeamViewComponents/MemberList";

export default function TeamView() {
	return (
		<div>
			<MemberList
				members={[
					{ position: "International", name: "Lizeth" },
					{ position: "Legacy", name: "Damian" },
					{ position: "Corporate", name: "Antonia" },
					{ position: "Central", name: "Keyshawn" }
				]}
			/>
		</div>
	);
}
