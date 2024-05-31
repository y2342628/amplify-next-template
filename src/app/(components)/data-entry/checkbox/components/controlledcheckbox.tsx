import React, { useState } from "react";
import { Button, Checkbox, Card } from "antd";
import type { CheckboxProps } from "antd";

export default function ControlledCheckbox() {
  const [checked, setChecked] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  const toggleDisable = () => {
    setDisabled(!disabled);
  };

  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log("checked = ", e.target.checked);
    setChecked(e.target.checked);
  };

  const label = `${checked ? "Checked" : "Unchecked"}-${
    disabled ? "Disabled" : "Enabled"
  }`;

  return (
    <Card title="CONTROLLEDCHECKBOX" hoverable className="box-shadow">
      <p style={{ marginBottom: "20px" }}>
        <Checkbox checked={checked} disabled={disabled} onChange={onChange}>
          {label}
        </Checkbox>
      </p>
      <p>
        <Button type="primary" size="small" onClick={toggleChecked}>
          {!checked ? "Check" : "Uncheck"}
        </Button>
        <Button
          style={{ margin: "0 10px" }}
          type="primary"
          size="small"
          onClick={toggleDisable}
        >
          {!disabled ? "Disable" : "Enable"}
        </Button>
      </p>
    </Card>
  );
}
