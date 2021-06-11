import React from "react";
import { DATASET } from "./data";
import styled from "@emotion/styled";

const Content = styled.div`
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ListWrapper = styled.ul`
margin:15px
display: flex;
align-items: center;
justify-content: center;
padding: 0;
`;

const ListItem = styled.li`
  background-color: #e1e4e8;
  list-style-type: none;
  flex: 1;
  padding: 3px;
  margin: 5px;
  text-align: center;

`;

const SearchInput = styled.input`
  width: 40rem;
  padding: 16px 16px 16px;
  border: none;
  font-size: 20px;
  background: rgb(255, 255, 255);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;

const SearchHeading = styled.h2`
  text-align: center;
  display: block;
  margin-bottom: 50px;
`;
export const App = () => {
  const [search, onSearch] = React.useState<string>("");
  const [data, onSearchData] = React.useState<undefined | string[]>(undefined);

  React.useEffect(() => {
    onSearchData(DATASET.filter(item => item.includes(search)));
  }, [search, onSearchData]);

  return (
    <Content>
      <div>
        <SearchHeading>Search</SearchHeading>
        <SearchInput type="text" value={search} onChange={e => onSearch(e.target.value.trim())} />
        <ListWrapper>
          {search.length ? data?.map((text, key) => <ListItem key={key}> {text}</ListItem>) : null}
        </ListWrapper>
      </div>
    </Content>
  );
};
