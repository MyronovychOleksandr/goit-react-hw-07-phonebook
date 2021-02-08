import React from "react";
import { connect } from "react-redux";

import phonebookOperations from "../../../redux/phonebookOperations";
import phonebookSelectors from "../../../redux/phonebookSelectors";

import s from "./PhonebookListItem.module.css";

const PhonebookListItem = ({ id, name, number, onRemove }) => {
  return (
    <li className={s.item}>
      <span className={s.name}>{name} </span>
      <div className={s.box}>
        <span>{number} </span>
        <button id={id} onClick={onRemove}>
          Delete
        </button>
      </div>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const contact = phonebookSelectors.getContactById(state, ownProps.id);
  return {
    ...contact,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(phonebookOperations.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookListItem);
