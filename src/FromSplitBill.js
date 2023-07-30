import React, { useState } from "react";
import { toast } from "react-toastify";

const FromSplitBill = ({ selectedfriend, changebalance }) => {
  const [bill, setbill] = useState("");
  const [expense, setexpense] = useState("");
  const friendexpense = bill ? bill - expense : "";
  const [payperson, setpayperson] = useState("friend");
  return (
    <form
      className={selectedfriend !== null ? " splitbill" : "opacity splitbill"}
      onSubmit={(e) => {
        e.preventDefault();
        if (bill === "" || expense === "") {
          toast.warn("please fill the bill form");
        } else {
          if (payperson === "friend") {
            changebalance(-expense);
          } else {
            changebalance(friendexpense);
          }
        }
      }}
    >
      <h3>split a bill with {selectedfriend?.name}</h3>
      <label for="billvalue">💸Bill value</label>
      <input
        type="text"
        id="billvaue"
        value={bill}
        onChange={(e) => {
          setbill(Number(e.target.value));
        }}
      />
      <label for="yourexpense">Your expense</label>
      <input
        type="text"
        id="yourexpense"
        value={expense}
        onChange={(e) => {
          if (e.target.value > bill) {
            setexpense(expense);
          } else {
            setexpense(Number(e.target.value));
          }
        }}
      />
      <label for="friendexpense">{selectedfriend?.name}'s expense</label>
      <input type="text" id="friendexpense" disabled value={friendexpense} />
      <label for="payingbill">who is paying the bill?</label>
      <select
        name="payingperson"
        value={payperson}
        onChange={(e) => {
          setpayperson(e.target.value);
        }}
      >
        <option value="you">you</option>
        <option value="friend">{selectedfriend?.name}</option>
      </select>
      <input type="submit" className="splitbillbtn buttn" value="split bill" />
    </form>
  );
};

export default FromSplitBill;
