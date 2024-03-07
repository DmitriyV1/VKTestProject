import { useState } from "react";
import styled from "styled-components";

const Group = styled.div`
  height: 30vh;
  width: 70vw;
  background-color: #222222;
  display: flex;
  margin: 1rem;
`;

const GroupAvatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 1rem;
  border: 1px solid white;
`;

const GroupName = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Wrapper = styled.div`
  padding-top: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledDiv = styled.div`
  padding-left: 2rem;
  padding-top: 1rem;
  height: 50px;
  cursor: pointer;
`;

const FriendsComponent = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 50px 50px 50px;
  grid-auto-flow: row;
  margin: 1rem;
  background-color: #393939;
  padding-left: 2rem;
  padding-top: 1rem;
`;

function GroupCard({ groups = [] }) {
  const [showFriends, setShowFriends] = useState(undefined);
  const handleFriends = (id) => {
    if (showFriends === id) {
      setShowFriends(undefined);
    } else {
      setShowFriends(id);
    }
  };

  return (
    <>
      {groups.map((group) => (
        <Group key={group.id}>
          <Wrapper>
            <GroupName>
              {group.name} <br />
              {group.closed ? "private" : "open"}
            </GroupName>
            <GroupAvatar color={group.avatar_color} />
          </Wrapper>
          <StyledDiv>Subscribers: {group.members_count}</StyledDiv>
          <StyledDiv onClick={() => handleFriends(group.id)}>
            Friends: {group.friends ? group.friends.length : "-"}
          </StyledDiv>
          {group.id === showFriends && group.friends != undefined && (
            <FriendsComponent>
              {group.friends != undefined &&
                group.friends.map((friend) => (
                  <span key={friend.first_name}>
                    {friend.first_name} {friend.last_name}
                  </span>
                ))}
            </FriendsComponent>
          )}
        </Group>
      ))}
    </>
  );
}

export default GroupCard;
