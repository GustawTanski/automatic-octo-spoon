import React from 'react';

import { Modal, Button, Rate } from 'antd';
import './FeedbackInfo.css';

class FeedbackInfo extends React.Component {
    state = {
        visible: false,
    };
    showModal = () => {
        this.props.onclick();
        this.setState({
            visible: true,
        });
    };
    handleCancel = () => {
        this.setState({ visible: false });
    };

    render() {
        const { visible } = this.state;
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Show more
                </Button>
                <Modal
                    visible={visible}
                    title="Title"
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                            Return
                        </Button>]}>
                    <Rate className="modal__rating" allowHalf defaultValue={2.5} disabled />
                </Modal>
            </div>
        );
    }
}
export default FeedbackInfo;
