import React from "react";
import { connect } from "react-redux";
import { Layout, Menu, Icon, Input, Select } from "antd";
import Router from "react-router";
const { Sider } = Layout;

const { SubMenu } = Menu;
const { Option } = Select;
const children = [];

export default class FeedbackSider extends React.Component {
	
	state = { collapsed: false, sliderWidth: "15vw" };

	onCollapse = collapsed => {
		this.setState({ collapsed });
	};
	onSelect = (val, opt) => {
		setTimeout(() => {
			document.querySelector(`[title=${val}]`).style.width="calc(15vw + 20px)";
		}, 1);
	};

	componentWillMount() {
		if (window.innerWidth < 700) {
			this.setState({ collapsed: true, sliderWidth: "50vw" });
		}
		for (let i = 10; i < 18; i++) {
			children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
		}
	}

	render() {
		const selectStyle = !this.state.collapsed
			? { width: "80%" }
			: { width: "80%", display: "none" };
		return (
			<Layout style={{ minHeight: "100vh" }}>
				<Sider
                  
                    style ={{width:"auto"}}
					collapsible
					collapsed={this.state.collapsed}
					onCollapse={this.onCollapse}
				>
					<div className="logo" />
					<Menu theme="dark" defaultSelectedKeys={["1"]} mode="vertical">
						<Menu.Item
							style={{ height: "auto" }}
							key="1"
							title="Search"
							onClick={() => {
								if (this.state.collapsed) {
									this.setState({ collapsed: false });
								}
							}}
						>
							<Icon type="search" />

							<Select
								style={selectStyle}
								mode="multiple"
								placeholder="Select category"
								onSelect={this.onSelect}
							>
								{children}
							</Select>
						</Menu.Item>

						<Menu.Item key="2">
							<Icon type="pie-chart" />
							<span>Option 1</span>
						</Menu.Item>
						<Menu.Item key="3">
							<Icon type="desktop" />
							<span>Option 2</span>
						</Menu.Item>
						<SubMenu
							key="sub1"
							title={
								<span>
									<Icon type="user" />
									<span>User</span>
								</span>
							}
						>
							<Menu.Item key="4">Tom</Menu.Item>
							<Menu.Item key="5">Bill</Menu.Item>
							<Menu.Item key="6">Alex</Menu.Item>
						</SubMenu>
						<SubMenu
							key="sub2"
							title={
								<span>
									<Icon type="team" />
									<span>Team</span>
								</span>
							}
						>
							<Menu.Item key="6">Team 1</Menu.Item>
							<Menu.Item key="8">Team 2</Menu.Item>
						</SubMenu>
						<Menu.Item key="9">
							<Icon type="file" />
							<span>File</span>
						</Menu.Item>
					</Menu>
				</Sider>
			</Layout>
		);
	}
}
