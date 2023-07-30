import React from "react";

const FormAddFriend = ({
  name,
  image,
  handleimage,
  handlename,
  handlefriends,
}) => {
  return (
    <form
      className="friendform"
      onSubmit={(e) => {
        e.preventDefault();
        handlefriends({
          id: Math.random(),
          name: name,
          image: image,
          balance: 0,
        });
      }}
    >
      <label for="friendname">
        <span>🧍</span>Freind Name
      </label>
      <input
        id="friendname"
        type="text"
        value={name}
        onChange={(e) => handlename(e.target.value)}
      />
      <label for="imageurl">
        <span>📷</span>image URL
      </label>
      <input
        id="friendname"
        type="text"
        value={image}
        onChange={(e) => handleimage(e.target.value)}
      />
      <input type="submit" value="Add" style={{ cursor: "pointer" }} />
    </form>
  );
};

export default FormAddFriend;
