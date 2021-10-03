import { Col, Row } from 'antd';
import React from 'react';
import { IssueType } from '../../api/getIssueApi';
import Issue from './Issue';
import {
  CellMeasurerCache,
  CellMeasurer,
  AutoSizer,
  List,
  InfiniteLoader,
} from 'react-virtualized';
import { MAX_ROWS } from '../../constants';

type PropType = {
  issues: IssueType[];
  page: number;
  setPage: (val: number) => void;
};

const IssueList = ({ issues, page, setPage }: PropType) => {
  const cache = React.useRef<any>(
    new CellMeasurerCache({ fixedWidth: true, defaultHeight: 100 })
  );
  function isRowLoaded({ index }: { index: number }) {
    return !!issues[index];
  }
  function loadMoreRows({
    startIndex: _v,
    stopIndex: _v2,
  }: {
    startIndex: number;
    stopIndex: number;
  }) {
    setPage(page + 1);
    return Promise.resolve(() => {});
  }

  return (
    <Col>
      <Row style={{ minHeight: '90vh' }}>
        <Col span={24}>
          <AutoSizer>
            {({ width, height }) => (
              <InfiniteLoader
                isRowLoaded={isRowLoaded}
                loadMoreRows={loadMoreRows}
                rowCount={MAX_ROWS}>
                {({ onRowsRendered, registerChild }) => (
                  <List
                    onRowsRendered={onRowsRendered}
                    ref={registerChild}
                    width={width}
                    height={height}
                    diferredMeasurementCache={cache.current}
                    rowHeight={cache.current.rowHeight}
                    rowCount={issues.length}
                    rowRenderer={({ index, key, style, parent }) => {
                      return (
                        <CellMeasurer
                          key={key}
                          cache={cache.current}
                          parent={parent}
                          columnIndex={0}
                          rowIndex={index}>
                          <Issue
                            style={style}
                            issue={issues[index]}
                            key={key}
                          />
                        </CellMeasurer>
                      );
                    }}></List>
                )}
              </InfiniteLoader>
            )}
          </AutoSizer>
        </Col>
      </Row>
    </Col>
  );
};

export default IssueList;
