import React, { useState, useEffect } from "react";
import { Button, Badge } from "antd";
import { Card } from "antd";
import { topicList } from "../constants/data";
import ContentModal from "../modals/ContentModal.tsx";

export default function TopicList() {
  const [open, setOpen] = useState(false);
  const [topicListData, setTopicListData] = useState(
    JSON.parse(localStorage.getItem("topicList")) || topicList
  );
  const [currentTopic, setcurrentTopic] = useState({});

  useEffect(() => {
    if (!localStorage.getItem("topicList")) {
      console.log("hii");
      localStorage.setItem("topicList", JSON.stringify(topicList));
      setTopicListData(topicList);
    }
  }, []);

  useEffect(() => {
    console.log(topicListData);
  }, [topicListData]);

  const handleClose = () => {
    setOpen(!open);
  };
  const updateTopicDetails = (newContent) => {};
  return (
    <div className="product_container">
      <p>Recommended Topics</p>
      {topicListData.all.map((item) => (
        <div>
          <Card
            title={item.heading}
            extra={
              <Button
                onClick={() => {
                  setcurrentTopic(item);
                  setOpen(true);
                }}
              >
                Write
              </Button>
            }
          >
            {item.keywords.map((item) => (
              <Badge
                className="site-badge-count-109"
                style={{ backgroundColor: "#52c41a" }}
                count={item}
              ></Badge>
            ))}
          </Card>
        </div>
      ))}
      {open && (
        <ContentModal
          handleClose={handleClose}
          topic={currentTopic}
          updateTopicDetails={updateTopicDetails}
        />
      )}
    </div>
  );
}
