import React from "react";
import { useHistory } from "react-router-dom";
import currencyFormatter from "../utils/cuurencyFormatter";
import dateFormatter from "../utils/dateFormatter";

const ContentDetails = ({ item }) => {
  console.log(item);
  const history = useHistory();
  return (
    <>
      <tr className="align-middle text-dark">
        <th className="p-6" scope="row">
          {item?.user?.firstname} {item?.user?.lastname}
        </th>

        <td className="p-6">{item?.title}</td>
        <td className="p-6">{item?.description}</td>
        <td className="p-6">{currencyFormatter("INR", item?.amount)}</td>
        <td className="p-6">
          {item?.createdAt && dateFormatter(item?.createdAt)}
        </td>
      </tr>
    </>
  );
};

export default ContentDetails;
