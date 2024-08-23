import React from "react";

const ShowList = ({ list, renderItem }) => {
  return <>{list.map((item, i) => renderItem(item, i))}</>;
};

export default ShowList;
