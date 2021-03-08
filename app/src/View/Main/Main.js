import React, { useState, useEffect } from "react";
import { BASE_URL } from "Utils/api";
import MainWrapper from "Components/MainWrapper";
import List from "Components/List";

const Main = () => {
  const [initialUsers, setinItialUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch(`${BASE_URL}`)
      .then((res) => res.json())
      .then((data) => {
        const partialData = data.filter((_, id) => id < 100);
        setinItialUsers(partialData);
        console.log(partialData);
      });
  };

  return (
    <MainWrapper>
      <List mappedList={initialUsers} />
    </MainWrapper>
  );
};

export default Main;
