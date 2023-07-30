import React from "react";
import Button from "./Button";

const Friend = ({ friend, handleselectedfriend, selectedfriend }) => {
  const handlefriend = () => {
    handleselectedfriend(friend);
  };
  return (
    <div
      className={
        friend.id === selectedfriend?.id ? "friend selected" : "friend"
      }
    >
      <img alt="personimage" src={friend.image} />
      <div className="text">
        <h4>{friend.name}</h4>
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes you {friend.balance} €
          </p>
        )}
        {friend.balance < 0 && (
          <p className="red">
            you owe {friend.name} {friend.balance} €
          </p>
        )}
        {friend.balance === 0 && <p>you are even</p>}
      </div>
      <Button handleclick={handlefriend}>
        {friend.id === selectedfriend?.id ? "close" : "select"}
      </Button>
    </div>
  );
};
export default Friend;
