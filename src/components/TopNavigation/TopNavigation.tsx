import { Col, Row, Typography, Space, Avatar, Image } from 'antd';
import React from 'react';
import styles from './TopNavigation.module.css';
import classNames from 'classnames/bind';
import SvgBell from '../../Assets/icons/SvgBell';
import SvgQuestionOutline from '../../Assets/icons/SvgQuestionOutline';
import SvgCarretDown from '../../Assets/icons/SvgCarretDown';
const cx = classNames.bind(styles);

const { Text } = Typography;

const navItem = [
  { name: 'Overview' },
  { name: 'My tickets', active: true },
  { name: 'Archive' },
  { name: 'Analytics' },
  { name: 'Reports' },
  { name: 'Settings' },
];

class App extends React.Component {
  render() {
    return (
      <Row align='middle' className={cx('nav')}>
        <Col span={10}>
          <Row>
            {navItem.map((item, index) => (
              <Col flex={1} key={item.name} className={cx('nav__item')}>
                <Text strong={item.active}>{item.name}</Text>
              </Col>
            ))}
          </Row>
        </Col>
        <Col span={10} />

        <Col span={4}>
          <Row align='middle' justify='end'>
            <Space size='large'>
              <SvgBell />
              <SvgQuestionOutline />
              <Row align='middle' justify='center'>
                <Avatar
                  src={
                    <Image src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
                  }
                />
                <SvgCarretDown />
              </Row>
            </Space>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default App;
