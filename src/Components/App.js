import { React, Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

import PhonebookForm from "./phonebookForm/PhonebookForm";
import Filter from "./filter/Filter";
import PhonebookList from "./phonebookList/PhonebookList";
import phonebookOperations from "../redux/phonebookOperations";
import phonebookSelectors from "../redux/phonebookSelectors";

import s from "./App.module.css";
import "./animation/fadeApp.css";

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }
  render() {
    return (
      <div className={s.container}>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="header"
          unmountOnExit
        >
          <h2 className={s.phonebookHeader}>Phonebook</h2>
        </CSSTransition>
        <PhonebookForm />
        <CSSTransition
          in={this.props.contacts.length > 1}
          timeout={250}
          classNames="filter"
          unmountOnExit
        >
          <Filter />
        </CSSTransition>

        <PhonebookList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: phonebookSelectors.getContacts(state),
});

const mapDispatchToProps = {
  onFetchContacts: phonebookOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
