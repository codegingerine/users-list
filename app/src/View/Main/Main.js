import React, { useState, useEffect } from "react";
import { BASE_URL } from "Utils/api";
import { getSortedData } from "Utils/helpers";
import MainWrapper from "Components/MainWrapper";
import List from "Components/List";
import SearchBar from "Components/SearchBar";
import Loader from "Components/Loader";
import { TitleStyled } from "./Main.styled";

const Main = () => {
  const [initialUsers, setinItialUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    initialUsers && setUsers(initialUsers);
  }, [initialUsers]);

  const fetchUsers = () => {
    setIsLoading(true);
    fetch(`${BASE_URL}`)
      .then((res) => res.json())
      .then((data) => {
        const partialData = data.filter((_, id) => id < 100);
        setinItialUsers(getSortedData(partialData, "last_name", true));
        setIsLoading(false);
        console.log(partialData);
      });
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleInputClear = () => {
    setQuery("");
    setUsers(initialUsers);
  };

  const handleSearch = () => {
    const searchList = initialUsers.filter(({ first_name, last_name }) => {
      const searchByTerms = [first_name, last_name].map((item) =>
        item.toLowerCase()
      );
      const queryTerm = query.toLowerCase().split(/[\s,]+/);
      return queryTerm.reduce((acc, val) => {
        return acc || searchByTerms.includes(val);
      }, false);
    });
    return setUsers(searchList);
  };

  const submitQuery = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <MainWrapper>
      <TitleStyled>Contacts</TitleStyled>
      <SearchBar
        onSubmit={submitQuery}
        placeholder="Enter user name"
        value={query}
        onChange={handleInputChange}
        onClose={handleInputClear}
      />
      {isLoading ? (
        <Loader loaderMsg="Contacts loading..." />
      ) : (
        <List mappedList={users} />
      )}
    </MainWrapper>
  );
};

export default Main;
