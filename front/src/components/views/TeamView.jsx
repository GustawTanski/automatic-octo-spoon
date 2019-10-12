import React from "react";

import MemberList from "../TeamViewComponents/MemberList";
import Nav from "../Nav"
import "./TeamView.css";

export default function TeamView() {
	return (
		<div className="team-view__wrapper">
            <Nav />
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
