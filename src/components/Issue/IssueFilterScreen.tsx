import React, { useState } from 'react';
import { Col, Row, Space, Typography } from 'antd';

import SvgDifficulty from '../../Assets/icons/SvgDifficulty';
import CustomSelect from '../CustomSelect/CustomSelect';
import { useIssueContext } from '../../context/StateContextProvider';
import SvgStatus from '../../Assets/icons/SvgStatus';

const { Text } = Typography;

const difficultyDummy = [
  {
    label: 'Easy',
    value: 'easy',
    fill: 'green',
  },
  {
    label: 'Medium',
    value: 'medium',
    fill: '#F4C700',
  },
  { label: 'Hard', value: 'hard', fill: 'red' },
].map((item) => ({
  ...item,
  options: (
    <Row align="middle">
      <Space>
        <SvgDifficulty fill={item.fill} />
        <Text>{item.label}</Text>
      </Space>
    </Row>
  ),
}));

const dummySelections = [
  { value: 'open' },
  { value: 'closed' },
  { value: 'all' },
].map((item) => ({
  ...item,
  label: (
    <Row align="middle">
      <Space>
        <SvgStatus />
        <Text>{item.value}</Text>
      </Space>
    </Row>
  ),
}));

const IssueFilterScreen = () => {
  const [difficulty, setDifficulty] = useState('medium');
  const { issueState } = useIssueContext();
  return (
    <Row>
      <Col xs={24} md={12} lg={6}>
        <CustomSelect
          options={difficultyDummy}
          labelKey={'options'}
          valueKey={'value'}
          widthPercent={90}
          value={difficulty}
          onChange={(value) => setDifficulty(value)}
        />
      </Col>
      <Col xs={24} md={12} lg={6}>
        <CustomSelect
          options={dummySelections}
          labelKey={'label'}
          valueKey={'value'}
          widthPercent={90}
          value={issueState}
          onChange={(_e) => {}}
        />
      </Col>
      <Col xs={24} md={12} lg={10}>
        filter 3
      </Col>
      <Col md={2}></Col>
    </Row>
  );
};

export default IssueFilterScreen;
