import React from "react";

const TableContentRow = ({ leftTitle, rightTitle }) => {
  return (
    <div className="w-full flex border border-b-0 text-sm">
      <div className="w-4/12 p-2 bg-sectionBg">
        <span>{leftTitle}</span>
      </div>
      <div className="w-8/12 p-2">
        <span>{rightTitle}</span>
      </div>
    </div>
  );
};

export default TableContentRow;
