import React from "react";
import Friend from "./Friend";

const FriendList = ({ friends, handleselectedfriend, selectedfriend }) => {
  return (
    <div className="friendslist">
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          handleselectedfriend={handleselectedfriend}
          selectedfriend={selectedfriend}
        />
      ))}
    </div>
  );
};

export default FriendList;
