import { Modal } from 'antd';
import React, { useState } from 'react';
import { StatusType } from '../../utils/GenericTypes';
import CustomSelect from '../CustomSelect/CustomSelect';

type PropType = {
  open: boolean;
  onClose: () => void;
  onOkay: (val: StatusType) => void;
};

const validStates = ['open', 'closed', 'all'].map((status) => ({
  value: status,
  label: status,
}));

const FilterModal = ({ open, onClose, onOkay }: PropType) => {
  const [modalIssueState, setModalIssueState] = useState<StatusType>('open');

  const handleOk = () => {
    onOkay(modalIssueState);
  };
  return (
    <Modal title="select a state" visible={open} onOk={handleOk}>
      <CustomSelect
        options={validStates}
        value={modalIssueState}
        onChange={(val) => {
          if (val === 'all' || val === 'open' || val === 'closed') {
            setModalIssueState(val);
          }
        }}
      />
    </Modal>
  );
};

export default FilterModal;
