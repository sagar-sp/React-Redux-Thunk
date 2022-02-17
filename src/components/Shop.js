import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
// import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

export default function Shop() {
  const dispatch = useDispatch();
  const { depositeMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div>
      <h2>Diposite/Wihdraw Money</h2>
      <button
        className="btn btn-primary mx-2"
        onClick={() => withdrawMoney(100)}
      >
        -
      </button>
      Update Balance
      <button
        className="btn btn-primary mx-2"
        onClick={() => depositeMoney(100)}
      >
        +
      </button>
    </div>
  );
}
