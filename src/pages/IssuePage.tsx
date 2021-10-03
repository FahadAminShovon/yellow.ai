import { Button, Row, Space, Typography, Col } from 'antd';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './IssuePage.module.css';
import SvgSort from '../Assets/icons/SvgSort';
import SvgFilter from '../Assets/icons/SvgFilter';
import { getIssue, IssueType } from '../api/getIssueApi';
import IssueList from '../components/Issue/IssueList';
import { useIssueContext } from '../context/StateContextProvider';
import { PER_PAGE } from '../constants';

const cx = classNames.bind(styles);

const { Title } = Typography;

const IssuePage = () => {
  const [issues, setIssues] = useState<IssueType[]>([]);
  const { issueState } = useIssueContext();
  const [page, setPage] = useState(1);

  useEffect(() => {
    getIssue({
      callback: setIssues,
      queryParams: { state: issueState, per_page: PER_PAGE, page: page },
    });
  }, [issueState, page]);

  return (
    <div className={cx('container')}>
      <Row>
        <Col span={24} className={cx('heading')}>
          <Row>
            <Col flex="auto">
              <Title>All tickets</Title>
            </Col>
            <Space size="middle">
              <Button
                className={cx('btn')}
                icon={<SvgSort className={cx('btn__icon')} />}
                size="large">
                Sort by Due Date
              </Button>
              <Button
                className={cx('btn')}
                size="large"
                icon={<SvgFilter className={cx('btn__icon')} />}>
                Filters
              </Button>
            </Space>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <IssueList issues={issues} page={page} setPage={setPage} />
        </Col>
      </Row>
    </div>
  );
};

export default IssuePage;
