import React from "react";
import { getUsers } from "../../redux/actions/getUsers";
import { connect } from "react-redux";
import { Layout, Menu, Icon, Input, Select } from "antd";
import Router from "react-router";
const { Sider } = Layout;

const { SubMenu } = Menu;
const { Option } = Select;
const children = [];

class FeedbackSider extends React.Component {

	state = { collapsed: false, sliderWidth: "15vw", isPrivate: false, tags: [], currentUser: 20 };

	onCollapse = collapsed => {
		this.setState({ collapsed });
	};
	onSelect = (val, opt) => {
		setTimeout(() => {
			// document.querySelector(`[title=${val}] svg`).style["margin-left"]="5px";
			document.querySelector(`[title=${val}]`).style.width = "calc(15vw + 20px)";

			// document.querySelector(`[title=${val}]`).style.display = "";
		}, 1);
	};

	onSelectAccess = ({ item, key, keyPath, selectedKeys, domEvent }) => {
		console.log(key)
		switch (key) {
			case "1":
				this.setState({ tags: [this.props.tags[0]] })
				break;
			case "2":
				this.setState({ tags: [this.props.tags[1]] })
				break;
			case "3":
				this.setState({ tags: [this.props.tags[2]] })
				break;
			case "4":
				this.setState({ tags: [this.props.tags[3]] })
				break;
			case "5":
				this.setState({ tags: [this.props.tags[4]] })
				break;
			case "50":
				this.setState({ isPrivate: true })
				break;
			case "51":
				this.setState({ isPrivate: false })
				break;
			default:
		}
	}

	onSubmit = () => {
		const arr = this.props.feedbacks.some(feedback => this.state.tags.indexOf(feedback) >= 0)
			.filter(feedback => feedback.isPrivate === this.state.isPrivate)
		this.props.getUsers(arr)
	}

	handleChange = (value) => {
		this.setState({ tags: value })
		console.log(value);
	}

	componentWillMount() {
		if (window.innerWidth < 700) {
			this.setState({ collapsed: true, sliderWidth: "50vw" });
		}
		for (let i = 10; i < 18; i++) {
			children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
		}
		// for (let i = 0; i < this.props.tags.length; i++) {
		// 	children.push(<Option key={i.toString(36) + i}>{this.props.tags[i]}</Option>);
		// }
	}

	render() {
		const selectStyle = !this.state.collapsed
			? { width: "80%" }
			: { width: "80%", display: "none" };
		return (
			<Layout style={{ minHeight: "100vh" }}>
				<Sider
					// width={this.state.sliderWidth}
					style={{ width: "auto" }}
					collapsible
					collapsed={this.state.collapsed}
					onCollapse={this.onCollapse}
				>
					<div className="logo" />
					<Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" onSelect={this.onSelectAccess}>
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
								onChange={this.handleChange}
							>
								{children}

							</Select>
						</Menu.Item>

						<SubMenu
							key="sub1"
							title={
								<span>
									<Icon type="tags" />
									<span>Tags</span>
								</span>
							}
						>
							{/* {this.props.tags.map((tag,i)=>
                                <Menu.Item key={i.toString}>tag</Menu.Item>
                             )} */}
							{/* // <Menu.Item key="1">Uno</Menu.Item>
							// <Menu.Item key="2">Dos</Menu.Item>
							// <Menu.Item key="3">Tres</Menu.Item> */}
						</SubMenu>
						<SubMenu
							key="sub2"
							title={
								<span>
									<Icon type="user" />
									<span>User</span>
								</span>
							}
						>
							{this.props.users.map((user, i) =>
								<Menu.Item key={i.toString}>user.name</Menu.Item>
							)}

						</SubMenu>
						<SubMenu

							key="sub3"
							title={
								<span>
									<Icon type="key" />
									<span>Access</span>
								</span>
							}
						>
							<Menu.Item key="50">Private</Menu.Item>
							<Menu.Item key="51">Public</Menu.Item>
						</SubMenu>

					</Menu>
				</Sider>
			</Layout>
		);
	}
}
const mapStateToProps = (state) => {
	return { users: state.users }
}

export default connect(mapStateToProps, { getUsers })(FeedbackSider)