import React from 'react';
import { Select } from 'antd';
const { Option } = Select;

type Props = {
  options: any[];
  value: string;
  onChange: (e: string) => void;
  valueKey?: string;
  labelKey?: string;
  defaultValue?: string;
  widthPercent?: number;
};

const CustomSelect = ({
  options,
  valueKey = 'value',
  labelKey = 'label',
  value,
  onChange,
  widthPercent = 100,
}: Props) => {
  return (
    <Select
      style={{ width: `${widthPercent}%` }}
      value={value}
      onChange={(val) => onChange(val)}>
      {options.map((item) => (
        <Option key={item[valueKey]} value={item[valueKey]}>
          {item[labelKey]}
        </Option>
      ))}
    </Select>
  );
};

export default CustomSelect;
