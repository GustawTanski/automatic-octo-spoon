import React from "react";

import MemberList from "../TeamViewComponents/MemberList";
import "./TeamView.css";

export default function TeamView() {
	return (
		<div className="team-view__wrapper">
			<MemberList
				members={[
					{ position: "Internal Tactics Planner", name: "Jacobs", chef: true },
					{ position: "Forward Implementation Supervisor", name: "Damian" },
					{ position: "Future Tactics Engineer", name: "Breanne" },
					{ position: "Product Division Administrator", name: "Alexandria Smitham" }
				]}
			/>
		</div>
	);
}
