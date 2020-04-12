import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Paging = (props) => {
  const { lstData, itemPerPage } = props;
  // console.log(lstData);
  // console.log(props.children);

  const [lstPage, setLstPage] = useState([]);
  const [lstCurrentPage, setLstCurrentPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const numItem = lstData.length / itemPerPage;
  const remainItem = lstData.length % itemPerPage;

  const numPage = numItem + (remainItem > 0 ? 1 : 0);

  useEffect(() => {
    setDataCurrent(lstData, 0, itemPerPage);
    getIndexPage(numPage);
  }, [numPage]);

  const getIndexPage = (numberPage) => {
    for (let i = 1; i <= numberPage; i++) {
      const pages = lstPage;
      pages.push(i);
      setLstPage([...pages]);
    }
  };

  const onclickChangePage = (number) => {
    setCurrentPage(number);
    setDataCurrent(lstData, number, itemPerPage);
  };

  const setDataCurrent = (lstData, numPage, numPerPage) => {
    // page number =2; numberPerPage = 2 => startIndex = 0, endIndex = 2
    const startIndex = numPage * numPerPage;
    const endIndex = numPage * numPerPage + numPerPage;
    let data = [];
    for (let i = startIndex; i < endIndex; i++) {
      lstData[i] && data.push(lstData[i]);
    }
    setLstCurrentPage(data);
    // console.log(data);
  };

  return (
    <div>
      {/* render the list */}
      {lstCurrentPage.map((item) => {
        return React.Children.map(props.children, (child) => {
          return React.cloneElement(child, {
            data: item,
          });
        });
      })}

      {lstPage.map((item, index) => (
        <div
          className={`flex item-paging mr-2 ${
            index === currentPage ? "active-page" : ""
          }`}
          key={index}
          onClick={() => onclickChangePage(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

const propTypes = {
  lstData: PropTypes.array.isRequired,
  itemPerPage: PropTypes.number.isRequired,
};

Paging.propTypes = propTypes;

export default Paging;
