import { Avatar, Card, Checkbox, Col, Row, Space } from 'antd';
import React, { useMemo } from 'react';
import styles from './issue.module.css';
import classNames from 'classnames/bind';
import { getColor } from '../../utils/helpers';
import IssueInfo from './IssueInfo';
import IssueFilterScreen from './IssueFilterScreen';
import { IssueType } from '../../api/getIssueApi.types';
const cx = classNames.bind(styles);

type PropType = {
  issue: IssueType;
};

const Issue = ({ issue }: PropType) => {
  const avatarColor = useMemo(() => getColor(), [JSON.stringify(issue)]);
  const { title, user, labels = [], created_at, milestone } = issue;
  let createdBy = '';
  let due_on = '';
  let login = '';

  if (milestone) {
    createdBy = milestone.creator.login;
    due_on = milestone.due_on;
  }
  if (user) login = user.login;

  const avatarLetter = login ? login.charAt(0).toUpperCase() : '?';
  return (
    <Card className={cx('container')} hoverable>
      <Row align="middle">
        <Col lg={2}>
          <Space size="large">
            <Checkbox />
            <Avatar size={55} style={{ background: avatarColor }}>
              {avatarLetter}
            </Avatar>
          </Space>
        </Col>
        <Col lg={10}>
          <IssueInfo
            title={title}
            labels={labels}
            createdAt={created_at}
            dueDate={due_on}
            createdBy={createdBy}
          />
        </Col>
        <Col md={24} lg={12}>
          <IssueFilterScreen issue={issue} />
        </Col>
      </Row>
    </Card>
  );
};

export default Issue;
