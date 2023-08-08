import { useState } from "react";
import Button from "./Button";
import FormAddFriend from "./FormAddFriend";
import FriendList from "./FriendList";
import FromSplitBill from "./FromSplitBill";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];
  const [friends, setfriends] = useState(initialFriends);
  const [show, setshow] = useState(false);
  const [name, setname] = useState("");
  const [image, setimage] = useState("");
  const [selectedfriend, setselectedfriend] = useState(null);
  const handlefriends = (friend) => {
    if (friend.name === "" || friend.image === "") {
      toast.warn("please complete the data");
    } else {
      setfriends([...friends, friend]);
      setname("");
      setimage("");
      setshow(!show);
    }
  };
  const handleshow = () => {
    setshow(!show);
    console.log(show);
  };
  const handleimage = (image) => {
    setimage(image);
  };
  const handlename = (name) => {
    setname(name);
  };
  const handleselectedfriend = (friend) => {
    if (friend.id === selectedfriend?.id) {
      setselectedfriend(null);
    } else {
      setselectedfriend(friend);
    }
    setshow(false);
  };
  const changebalance = (b) => {
    setfriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedfriend.id
          ? { ...friend, balance: friend.balance + b }
          : friend
      )
    );
    setselectedfriend(null);
  };
  return (
    <div className="App">
      <div className="firstrow">
        <FriendList
          friends={friends}
          handleselectedfriend={handleselectedfriend}
          selectedfriend={selectedfriend}
        />
        {show && (
          <>
            <FormAddFriend
              name={name}
              image={image}
              handleimage={handleimage}
              handlename={handlename}
              handlefriends={handlefriends}
            />
            <ToastContainer />
          </>
        )}

        <div className="lastbtn">
          <Button handleclick={handleshow}>
            {show ? "close" : "add friend"}
          </Button>
        </div>
      </div>
      {selectedfriend ? (
        <FromSplitBill
          selectedfriend={selectedfriend}
          className=""
          changebalance={changebalance}
          key={selectedfriend.id}
        />
      ) : (
        <FromSplitBill
          selectedfriend={selectedfriend}
          className="opacity"
          changebalance={changebalance}
          key={selectedfriend.id}
        />
      )}

      <ToastContainer />
    </div>
  );
}

export default App;
