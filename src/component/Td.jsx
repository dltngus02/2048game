import React, { useEffect, useReducer, useCallback, useState } from "react";
import "./Td.css";
const Td = ({ cellData }) => {
  return (
    <>
      <td>{cellData}</td>
    </>
  );
};
export default Td;
