import React from "react";
import { PaginationContainer } from "./style";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  return (
    <PaginationContainer>
      <IoIosArrowDropleft size={28} color={"#d11919"} onClick={onLeftClick} />

      <div style={{ margin: "10px" }}>
        {page} de {totalPages}
      </div>
      <IoIosArrowDropright size={28} color={"#d11919"} onClick={onRightClick} />
    </PaginationContainer>
  );
};

export default Pagination;
