import React, { useState } from "react";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handelSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };
  const resetInputField = () => {
    setSearchValue("");
  };
  const callSearchFunciton = (e) => {
    console.log(e);
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };
  console.log(props.search);

  return (
    <form className="search" onSubmit={callSearchFunciton}>
      <input
        value={searchValue}
        onChange={handelSearchInputChanges}
        type="text"
        placeholder="영화 제목을 입력하세요."
      />
      <input type="submit" value="검색" />
    </form>
  );
};

export default Search;
