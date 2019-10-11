import React from "react";
import { Icon, Popover } from "antd";

import "./Actions.css";

export default function Actions() {
	return (
		<Popover placement="bottomLeft" type="focus" content={<span>Feedback</span>}>
			<div className="member__actions">
				<Icon type="down" />
			</div>
		</Popover>
	);
}
