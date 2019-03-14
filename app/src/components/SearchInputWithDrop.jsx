import React, { useState, useRef } from "react";
import styled from "styled-components";
import { create } from "domain";

const StyledSearchInputWithDrop = styled.div`
  margin-right: 20px;

  input {
    width: 100%;
    height: 30px;
    background: #DDE1E6;
    border: none;
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 0;
  }

  .search-names {
    display: flex;
    flex-direction: column;
    float: left;
    width: 100%;
    overflow-y: auto;
    height: 150px;
    border: 1px solid lightgray;
    box-shadow: rgba(100, 100, 100, 0.3) 0px 0px 10px;
    margin-bottom: 20px;
    margin-top: 5px;
    padding: 15px 0;
    padding-left: 15px;
    background: whitesmoke;

    .search-name {
      margin-bottom: 10px;
    }
  }

  .add-org {
    font-size: 16px;
    color: #17BCFF;
    font-weight: 700;
    p {
      margin-bottom: 5px;
    }
  }

  button {
    width: 146px;
    height: 40px;
    border-radius: 30px;
    border: none;
    background: #17BCFF;
    font-size: 16px;
    color: #fff;
    margin-top: 15px;
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
   // need to make sure the end point gets fixed
    props.join(name, id);
  }
  return (
    <StyledSearchInputWithDrop>
      <input
        placeholder="Search for and organization..."
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
