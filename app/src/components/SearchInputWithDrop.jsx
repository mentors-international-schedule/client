import React, { useState, useRef } from "react";
import styled from "styled-components";
import { create } from "domain";

const StyledSearchInputWithDrop = styled.div`
  width: 90%;
  margin-left: 5%;
  input {
    width: 100%;
  }
  .search-names {
    height: 300px;
    border: 1px solid black;
  }
  .add-org {
    border: 1px solid black;
    border-top: none;
  }
`;

export default function SearchInputWithDrop(props) {
  const searchInputVal = useRef(null);
  const createInputVal = useRef(null);
  const [itemsToShow, setItemsToShow] = useState([]); //props.items;
  const [showItems, setShowItems] = useState(false);

  function handleInputChange() {
    const curInput = searchInputVal.current.value.toLowerCase();
    if (curInput === "") {
      setItemsToShow([]);
      setShowItems(false);
    } else {
      setItemsToShow(
        props.items.filter(item => item.name.toLowerCase().includes(curInput))
      );
      setShowItems(true);
    }
  }

  function submitCreate(name, event) {
    event.preventDefault();
    props.create(name);
  }

  function join(name, id) {
    debugger;
    props.join(name, id);
  }
  return (
    <StyledSearchInputWithDrop>
      <input
        placeholder="search"
        ref={searchInputVal}
        onChange={handleInputChange}
        type="text"
      />

      {!showItems ? (
        <> </>
      ) : (
        <div>
          <div className="search-names">
            {itemsToShow.map(item => (
              <div
                onClick={() => join(item.name, item.id)}
                className="search-name"
                key={item.id}
              >
                {item.name}
              </div>
            ))}
          </div>

          <div className="add-org">
            <p>Can't find your organization? Add it!</p>
            <form
              onSubmit={event =>
                submitCreate(createInputVal.current.value, event)
              }
            >
              <input type="text" ref={createInputVal} />
              <button>Add</button>
            </form>
          </div>
        </div>
      )}
    </StyledSearchInputWithDrop>
  );
}
