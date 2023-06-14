import React from "react";
import { Button, Badge } from "antd";
import { Card } from "antd";
import { topicList } from "../constants/data";

export default function TopicList() {
  return (
    <div className="product_container">
      <p>Recommended Topics</p>
      {topicList.all.map((item) => (
        <div>
          <Card title={item.heading} extra={<Button>Write</Button>}>
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
    </div>
  );
}
