import React from 'react';
import { Col, Row, Space, Tag, Typography } from 'antd';
import styles from './issueInfo.module.css';
import classNames from 'classnames/bind';
import moment from 'moment';
import { LabelsEntity } from '../../api/getIssueApi.types';

const { Text } = Typography;

const cx = classNames.bind(styles);

type PropType = {
  title: string;
  labels: LabelsEntity[];
  createdBy?: string;
  createdAt: string;
  dueDate?: string;
};
const IssueInfo = ({
  title,
  labels,
  createdBy,
  createdAt,
  dueDate,
}: PropType) => {
  const renderCreatedBy = createdBy ? createdBy : '-';
  const renderCreatedAt = createdAt ? moment(createdAt).fromNow() : '-';
  const renderDueAt = () => {
    if (dueDate) {
      if (moment(dueDate).isBefore()) {
        return `Overdue by ${moment(dueDate).fromNow()}`;
      } else {
        return `Due by ${moment(dueDate).format('DD-MM-YY')}`;
      }
    }
    return 'Due by -';
  };
  return (
    <Row align="middle" className={cx('container')} wrap>
      {labels.length > 0 && (
        <Col span={24}>
          <Space size="small">
            {labels.map((label) => (
              <Tag key={label.id} color={`#${label.color}`}>
                {label.name}
              </Tag>
            ))}
          </Space>
        </Col>
      )}
      <Col span={24}>
        <Text strong>{title}</Text>
      </Col>
      <Row>
        <Space>
          <Text type="secondary">By {renderCreatedBy}</Text>
          <Col className={cx('divider--circle')} />
          <Text type="secondary">Created {renderCreatedAt}</Text>

          <Col className={cx('divider--circle')} />
          <Text type="secondary"> {renderDueAt()}</Text>
        </Space>
      </Row>
    </Row>
  );
};

export default IssueInfo;
