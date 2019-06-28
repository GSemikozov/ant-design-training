import { Col, Row, Tabs } from "antd";
import React from "react";

import styles from "./ContentTabs.module.less";

const { TabPane } = Tabs;

const ContentTabs = () => (
  <Tabs defaultActiveKey="1" tabPosition="top" className={styles.contentTabs}>
    {[...Array(4).keys()].map(i => (
      <TabPane tab={`Tab-${i}`} key={i}>
        <Row>
          <Col span={12}>Content of tab {i}</Col>
        </Row>
      </TabPane>
    ))}
  </Tabs>
);

export default ContentTabs;
