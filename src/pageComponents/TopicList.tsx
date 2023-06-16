import React, { useState, useEffect } from "react";
import { Button, Tag } from "antd";
import { Card } from "antd";
import { topicList } from "../constants/data";
import ContentModal from "../modals/ContentModal.tsx";
import AddTopicModal from "../modals/AddTopicModal.tsx";

const defaultContent =
  "By establishing an online presence, small businesses can ensure that they are visible to potential customers, regardless of their location. In addition to reaching a wider audience, having a digital presence can also help small businesses build brand awareness and credibility.";
export default function TopicList() {
  const [open, setOpen] = useState(false);
  const [openAddTopic, setOpenAddTopic] = useState(false);

  const [topicListData, setTopicListData] = useState(
    JSON.parse(localStorage.getItem("topicList")) || topicList
  );

  const [currentTopic, setcurrentTopic] = useState({});

  const handleClose = () => {
    setOpen(!open);
  };

  const handleTopicClose = () => {
    setOpenAddTopic(!openAddTopic);
  };

  const setTopicList = (topicList) => {
    setTopicListData(topicList);
    localStorage.setItem("topicList", JSON.stringify(topicList));
  };
  const handleAddTopic = (topicData) => {
    const topicList = [...topicListData];
    console.log(topicList);
    topicList.push({
      ...topicData,
      content: defaultContent,
      id: topicList.length + 1,
    });
    setTopicList(topicList);
  };

  const updateTopicDetails = (newContent) => {
    const topicList = [...topicListData];
    topicList.find((item) => item.id === currentTopic.id).content = newContent;
    setTopicList(topicList);
  };

  useEffect(() => {
    if (!localStorage.getItem("topicList")) {
      localStorage.setItem("topicList", JSON.stringify(topicList));
    }
  }, []);

  return (
    <div className="product_container">
      <div className="heading">
        <b>Recommended Topics</b>
        <Button danger onClick={() => setOpenAddTopic(true)}>
          Add Topic
        </Button>
      </div>
      {console.log(topicListData)}
      {topicListData.map((item) => (
        <Card
          title={item.heading}
          className="topic_card"
          extra={
            <Button
              danger
              onClick={() => {
                setcurrentTopic(item);
                setOpen(true);
              }}
            >
              Write
            </Button>
          }
        >
          {item.keywords.map((item, index) => (
            <Tag color={index % 2 === 0 ? "magenta" : "cyan"}>{item}</Tag>
          ))}
        </Card>
      ))}
      {open && (
        <ContentModal
          handleClose={handleClose}
          topic={currentTopic}
          updateTopicDetails={updateTopicDetails}
        />
      )}
      {openAddTopic && (
        <AddTopicModal
          handleClose={handleTopicClose}
          handleAddTopic={handleAddTopic}
        />
      )}
    </div>
  );
}
