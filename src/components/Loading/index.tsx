import React from "react";

import { Spin } from "antd";

const Loading = ({ show, message }: { show: boolean; message?: string }) => {
  if (!show) {
    return null;
  }

  return (
    <Spin tip="Loading" size="large" fullscreen>
      {message || "Loading..."}
    </Spin>
  );
};

export default Loading;
