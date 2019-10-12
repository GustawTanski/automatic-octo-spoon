import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MemberList from "../TeamViewComponents/MemberList";
import Nav from "../Nav";
import { getUsersTeam } from "../../redux/actions/users";
import "./TeamView.css";

export default function TeamView() {
	const dispatch = useDispatch();
	const users = useSelector(state => state.users);
	useEffect(() => {
		dispatch(getUsersTeam());
	}, ["const"]);
	return (
		<div className="team-view__wrapper">
			<Nav />
			<MemberList
				members={users.map(user => ({
					position: user.email,
					name: user.name,
					chef: user.isBoss
				}))}
			/>
		</div>
	);
}
