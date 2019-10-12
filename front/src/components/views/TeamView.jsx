import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";

import MemberList from "../TeamViewComponents/MemberList";
import Nav from "../Nav";
import { getUsersTeam } from "../../redux/actions/users";
import "./TeamView.css";
import { Z_FIXED } from "zlib";

export default function TeamView() {
	const dispatch = useDispatch();
	const users = useSelector(state => state.users);
	useEffect(() => {
		dispatch(getUsersTeam());
	}, ["const"]);
	return (
		<div className="team-view__wrapper">
			<Nav />
			{users.length ? (
				<MemberList
					members={users.map(user => ({
						position: user.email,
						name: user.name,
						chef: user.isBoss,
						id: user["_id"]
					}))}
				/>
			) : (
				<Spin
					tip="Loading..."
					style={{
						position: "fixed",
						top: "50vh",
						left: "50vw",
						transform: "translate(-50%,-50%)"
					}}
				/>
			)}
		</div>
	);
}
