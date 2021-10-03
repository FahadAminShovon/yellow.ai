import { Avatar, Card, Checkbox, Col, Row, Space } from 'antd';
import React, { useMemo } from 'react';
import { IssueType } from '../../api/getIssueApi';
import styles from './issue.module.css';
import classNames from 'classnames/bind';
import { getAvatarColor } from '../../utils/helpers';
import IssueInfo from './IssueInfo';
import IssueFilterScreen from './IssueFilterScreen';
const cx = classNames.bind(styles);

type PropType = {
  issue: IssueType;
  style: any;
  ref?: any;
};

const Issue = ({ issue, style, ref }: PropType) => {
  const avatarColor = useMemo(() => getAvatarColor(), [issue]);
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
    <div style={style}>
      <Card className={cx('container')} hoverable>
        <Row align="middle" ref={ref}>
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
            <IssueFilterScreen />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Issue;
