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
import FilterModal from '../components/FilterModal/FilterModal';
import { StatusType } from '../utils/GenericTypes';
import { useLoaderContext } from '../context/LoaderContext';

const cx = classNames.bind(styles);

const { Title } = Typography;

const IssuePage = () => {
  const [issues, setIssues] = useState<IssueType[]>([]);
  const { issueState, setIssueState } = useIssueContext();
  const [page, setPage] = useState(1);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const closeModal = () => setIsOpenModal(false);
  const { setShowLoader } = useLoaderContext();

  const handleOkay = (val: StatusType) => {
    if (val !== issueState) {
      setIssueState(val);
      setPage(1);
      setIssues([]);
      getIssue({
        setLoader: setShowLoader,
        callback: setIssues,
        queryParams: { state: issueState, per_page: PER_PAGE, page: 1 },
      });
    }
    closeModal();
  };
  const showModal = () => setIsOpenModal(true);

  const handlePageChange = (pageNo: number) => {
    setPage(pageNo);
    getIssue({
      callback: setIssues,
      queryParams: { state: issueState, per_page: PER_PAGE, page: pageNo },
    });
  };

  useEffect(() => {
    getIssue({
      setLoader: setShowLoader,
      callback: setIssues,
      queryParams: { state: issueState, per_page: PER_PAGE, page: page },
    });
  }, [issueState]);

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
                onClick={showModal}
                icon={<SvgFilter className={cx('btn__icon')} />}>
                Filters
              </Button>
            </Space>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <IssueList issues={issues} page={page} setPage={handlePageChange} />
        </Col>
      </Row>
      <FilterModal
        open={isOpenModal}
        onOkay={handleOkay}
        onClose={closeModal}
      />
    </div>
  );
};

export default IssuePage;
