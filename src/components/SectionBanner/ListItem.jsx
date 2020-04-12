import React, { useState } from "react";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "./store/actions";
import { useEffect } from "react";
import { fetchData } from "./store/actions";
import Paging from "../Paging";

const ListItem = (props) => {
  // const exList = [
  //   {
  //     id: 136,
  //     label: "Tình yêu và tham vọng",
  //     url: "https://www.vtvgiaitri.vn/title/tinh-yeu-va-tham-vong",
  //     reference_id: 1,
  //     reference_type: 9,
  //     index: 0,
  //     type_display: "label",
  //     banner: 3,
  //     image: "https://content.vtvgiaitri.vn/banner/banner.item_1584611443.jpeg",
  //   },
  //   {
  //     id: 137,
  //     label: "Những ngày không quên",
  //     url: "https://www.vtvgiaitri.vn/title/nhung-ngay-khong-quen",
  //     reference_id: 1,
  //     reference_type: 9,
  //     index: 1,
  //     type_display: "label",
  //     banner: 3,
  //     image: "https://content.vtvgiaitri.vn/banner/banner.item_1586156751.jpeg",
  //   },
  // ];

  const dispatch = useDispatch();
  const lstData = useSelector((data) => data.bannerReducer.lstData);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div>
      <Paging lstData={lstData} itemPerPage={1}>
        <Item />
      </Paging>
    </div>
  );
};

export default ListItem;
