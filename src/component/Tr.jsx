import React, { useEffect, useReducer, useCallback, useState } from "react";
import Td from "./Td";
const Tr = ({ rowData }) => {
  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map((td, i) => (
          <Td key={i} cellData={rowData[i]} />
        ))}
    </tr>
  );
};

export default Tr;
