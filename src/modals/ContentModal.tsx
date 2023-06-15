import React, { useState } from "react";
import { Select, Modal, Button } from "antd";
import { Editor } from "@tinymce/tinymce-react";
import "../App.scss";

const toneOptions = [
  { value: "formal", label: "Formal" },
  { value: "informal", label: "Informal" },
  { value: "optimistic", label: "Optimistic" },
  { value: "worried", label: "Worried" },
  { value: "humor", label: "Humor" },
];
export default function ContentModal({
  handleClose,
  topic,
  updateTopicDetails,
}) {
  const [editorValue, setEditorValue] = useState("");
  return (
    <Modal
      title={topic.heading}
      open
      onCancel={handleClose}
      className="content_modal"
    >
      <div className="dropdown_container">
        <div>
          <b>Select Tone:</b>
          <Select
            defaultValue="Formal"
            style={{ width: 200 }}
            options={toneOptions}
          />
        </div>
        <Button danger onClick={() => setEditorValue(topic.content)}>
          Generate
        </Button>
      </div>
      <Editor
        apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
        init={{
          plugins: "lists link image paste help wordcount",
          toolbar:
            "undo redo | blocks | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | help",
        }}
        value={editorValue}
        onEditorChange={(value) => {
          setEditorValue(value);
        }}
      />
      <Button
        danger
        onClick={() => {
          updateTopicDetails(editorValue);
        }}
      >
        Save
      </Button>
    </Modal>
  );
}
