import React from "react";
import { Card, Col, Row } from "antd";

const SingleFeedback = () => {
	return (
		<Row gutter={16}>
			<Col span={8}>
				<Card title="Card title" bordered={false} extra={<a href="#">More info</a>}>
					Single Feedback
				</Card>
			</Col>
			<Col span={8}>
				<Card title="Card title" bordered={false} extra={<a href="#">More info</a>}>
					Single Feedback
				</Card>
			</Col>
			<Col span={8}>
				<Card title="Card title" bordered={false} extra={<a href="#">More info</a>}>
					Single Feedback
				</Card>
			</Col>
		</Row>
	);
};
export default SingleFeedback;
