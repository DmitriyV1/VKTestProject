import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 1.6rem;
  justify-content: flex-end;

  > * {
    padding: 1rem;
    margin: 1rem;
    width: 10vw;
    background-color: #222222;
    border-radius: 5px;
    color: #d8dadd;
  }
`;

function Filter({ setFilter, filterColors = [] }) {
  function handleChange(e) {
    setFilter(e.target.value);
  }

  return (
    <Wrapper>
      <select onChange={handleChange}>
        {filterColors.map((elem) => (
          <option value={elem} key={elem}>
            {elem}
          </option>
        ))}
      </select>

      <select onChange={handleChange}>
        <option value="all">all</option>
        <option value="open">open</option>
        <option value="private">private</option>
      </select>

      <select onChange={handleChange}>
        <option value="friends">with friends</option>
        <option value="friendless">without friends</option>
      </select>
    </Wrapper>
  );
}

export default Filter;
