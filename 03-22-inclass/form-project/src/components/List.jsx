import React from "react";
import ListItem from "./ListItem";

const List = ({ houses, removeHouse }) => {
  return (
    <div className="row mt-5">
    {houses.map((house, id)=> <ListItem house={house} removeHouse={removeHouse}/>)}
    </div>
  );
};

export default List;
