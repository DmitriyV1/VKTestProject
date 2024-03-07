import { useEffect, useState } from "react";
import groups from "./groups.json";
import Filter from "./Components/Filter";
import getColors from "./Functions/getColors";
import GroupCard from "./Components/GroupCard";
import getFilteredGroups from "./Functions/getFilteredGroups";

function App() {
  const [allGroups, setAllGroups] = useState([]);
  const [filteredGroups, setFilteredGroups] = useState([]);
  const [filter, setFilter] = useState("");
  const [filterColors, setFilterColors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Getting data at 1st render
  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setAllGroups(groups);
      setFilterColors(Array.from(new Set(getColors(groups))));

      setIsLoading(false);
    }, 1000);
  }, []);

  // Getting filtered groups
  useEffect(() => {
    setFilteredGroups(getFilteredGroups(allGroups, filter));
  }, [filter, allGroups]);

  return (
    <>
      <Filter setFilter={setFilter} filterColors={filterColors} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <GroupCard
          groups={filteredGroups.length < 1 ? allGroups : filteredGroups}
        />
      )}
    </>
  );
}

export default App;
