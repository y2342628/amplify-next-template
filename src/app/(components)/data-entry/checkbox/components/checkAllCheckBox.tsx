import React, { useState } from "react";
import { Checkbox, Divider, Card } from "antd";
import type { CheckboxProps, GetProp } from "antd";

type CheckboxValueType = GetProp<typeof Checkbox.Group, "value">[number];

const CheckboxGroup = Checkbox.Group;

export default function CheckAllCheckbox() {
  const plainOptions = ["Apple", "Pear", "Orange"];
  const defaultCheckedList = ["Apple", "Orange"];

  const [checkedList, setCheckedList] =
    useState<CheckboxValueType[]>(defaultCheckedList);

  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < plainOptions.length;

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
  };

  const onCheckAllChange: CheckboxProps["onChange"] = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
  };

  return (
    <Card title="CHECKALL" hoverable className="box-shadow">
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Check all
      </Checkbox>
      <Divider />
      <CheckboxGroup
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
      />
    </Card>
  );
}
