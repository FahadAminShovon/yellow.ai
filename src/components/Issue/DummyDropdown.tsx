import React from 'react';
import { Col, Row, Space } from 'antd';
import classNames from 'classnames/bind';
import styles from './DummyDropdown.module.css';
import SvgCarretDown from '../../Assets/icons/SvgCarretDown';

const cx = classNames.bind(styles);

type PropType = {
  value: string;
  icon: React.ReactNode;
};
const DummyDropdown = ({ value, icon }: PropType) => {
  return (
    <Row align="middle" className={cx('container')}>
      <Space>
        <Col>{icon}</Col>
        <Col>{value}</Col>
      </Space>
      <SvgCarretDown />
    </Row>
  );
};

export default DummyDropdown;
