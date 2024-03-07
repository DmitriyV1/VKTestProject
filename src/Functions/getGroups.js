import groups from "../groups.json";

export default async function getGroups() {
  let allGroups;
  setTimeout(() => {
    allGroups = groups;
  }, 1000);

  return allGroups;
}
