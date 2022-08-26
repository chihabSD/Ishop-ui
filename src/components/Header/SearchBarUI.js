import { SearchOutlined } from '@ant-design/icons'
import React from 'react'
import { SearchContainer,  SearchBar, SearchBarIconsContainer, SearchIcon } from './Style'

const SearchBarUI = ({hide}) => {
  return (
    <SearchContainer id= {hide ? "searchVisbile":""}>
    <SearchBar>
      <input
        type="text"
        name=""
        placeholder="Search for everything..."
      />
      <SearchBarIconsContainer>

        <SearchIcon>
        <div>
          <SearchOutlined style={{ fontSize: "25px" }} />
        </div>
        </SearchIcon>
      </SearchBarIconsContainer>
    </SearchBar>

    {/* <SearchResult /> */}
  </SearchContainer>
  )
}

export default SearchBarUI