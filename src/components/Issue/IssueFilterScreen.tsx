import React, { useMemo } from 'react';
import { Col, Row } from 'antd';

import { useIssueContext } from '../../context/StateContext';
import SvgStatus from '../../Assets/icons/SvgStatus';
import SvgCadet from '../../Assets/icons/SvgCadet';
import { IssueType } from '../../api/getIssueApi.types';
import DummyDropdown from './DummyDropdown';
import SvgDifficulty from '../../Assets/icons/SvgDifficulty';
import { getRandomInt } from '../../utils/helpers';
import styles from './IssueFilter.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const difficultyDummy = [
  {
    label: 'Easy',
    fill: 'green',
  },
  {
    label: 'Medium',
    fill: '#F4C700',
  },
  { label: 'Hard', fill: 'red' },
];

type PropType = {
  issue: IssueType;
};
const IssueFilterScreen = ({ issue }: PropType) => {
  const difficultyIdx = useMemo(
    () => getRandomInt(0, difficultyDummy.length - 1),
    [JSON.stringify(issue)]
  );
  const { issueState } = useIssueContext();
  return (
    <Row>
      <Col xs={24} md={12} lg={6} className={cx('divider--col')}>
        <DummyDropdown
          value={difficultyDummy[difficultyIdx].label}
          icon={<SvgDifficulty fill={difficultyDummy[difficultyIdx].fill} />}
        />
      </Col>
      <Col xs={24} md={12} lg={6} className={cx('divider--col')}>
        <DummyDropdown value={issueState} icon={<SvgStatus />} />
      </Col>
      <Col xs={24} md={12} lg={10} className={cx('divider--col')}>
        <DummyDropdown
          value={issue?.assignee?.login || '-'}
          icon={<SvgCadet />}
        />
      </Col>
      <Col md={2}></Col>
    </Row>
  );
};

export default IssueFilterScreen;
