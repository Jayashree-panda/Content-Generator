import React from "react";
import { Modal, Button, Form, Input, Select, Checkbox } from "antd";

const tagOptions = [
  "online presence",
  "small buisness",
  "digital marketing",
  "branding",
];

const tagOptionsDropdown = tagOptions.map((item) => ({
  value: item,
  label: item,
}));

export default function AddTopicModal({ handleClose, handleAddTopic }) {
  const onFinish = (values: any) => {
    console.log("Success:", values);
    handleAddTopic(values);
    handleClose();
  };

  return (
    <Modal
      title="Add Topic"
      open
      onCancel={handleClose}
      className="content_modal"
      footer={null}
    >
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        initialValues={{ keywords: ["online presence", "small buisness"] }}
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          name="heading"
          rules={[{ required: true, message: "Please input the title!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Keywords"
          name="keywords"
          rules={[{ required: true, message: "Please input the keywords!" }]}
        >
          <Select
            mode="multiple"
            placeholder="Please select"
            // defaultValue={["online presence", "small buisness"]}
            style={{ width: "100%" }}
            options={tagOptionsDropdown}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" danger htmlType="submit">
            Add Topic
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
