import React, { useState } from "react";
import { Button, Badge } from "antd";
import { Card } from "antd";
import { topicList } from "../constants/data";
import ContentModal from "../modals/ContentModal.tsx";

export default function TopicList() {
  const [open, setOpen] = useState(false);
  const [currentHeading, setCurrentHeading] = useState("");

  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <div className="product_container">
      <p>Recommended Topics</p>
      {topicList.all.map((item) => (
        <div>
          <Card
            title={item.heading}
            extra={
              <Button
                onClick={() => {
                  setOpen(true);
                  setCurrentHeading(item.heading);
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
        <ContentModal handleClose={handleClose} title={currentHeading} />
      )}
    </div>
  );
}
