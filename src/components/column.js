import React, { Component } from "react";
import Card from "./card";

class Column extends Component {
  constructor(props) {
    super(props);
    // Create a ref to the cardField (text area) of the last card in the column
    this.cardField = React.createRef();
  }

  // Prevent default event behaviors for drag and drop
  handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Function to capitalize the first letter of a string
  capitalizeFirstLetter(string) {
    return string.replace(string[0], string[0].toUpperCase());
  }

  render() {
    return (
      <div
        className="column drag-and-drop"
        // Call the parent component's onHandleDrop function when a card is dropped into this column
        onDrop={(e) => this.props.onHandleDrop(e, this.props.name)}
        // Call the handleDragOver function to prevent default behaviors when a card is dragged over this column
        onDragOver={(e) => this.handleDragOver(e)}
        // Uncomment the following lines if you want to add visual feedback when a card is dragged over this column
        // onDragEnter={e => this.handleDragEnter(e)}
        // onDragLeave={e => this.handleDragLeave(e)}
      >
        {/* Render the column header */}
        <h4 className={[this.props.cardHeader, "column__header"].join(" ")}>
          {this.capitalizeFirstLetter(this.props.name)}
        </h4>
        {/* Render the cards in this column */}
        {this.props.cards.map((card, index, arr) => {
          return (
            <Card
              parent={this.props.name}
              onClick={this.props.onNavClick}
              onCardBlur={this.props.onCardBlur}
              orientation={this.props.orientation}
              id={card.id}
              key={card.id}
              title={card.title}
              // Set the cardField ref to the child text area of the last card in the column, and pass it as a prop
              cardField={
                arr.length - 1 === index
                  ? (textArea) => (this.cardField = textArea)
                  : null
              }
            />
          );
        })}
        {/* Render the button to add a new card */}
        <button
          className={"column__add-card"}
          onClick={() => {
            // Call the parent component's onClick function to add a new card
            this.props.onClick();
            // Focus on the text area of the last card in the column, after a brief delay to allow for rendering
            setTimeout(() => {
              this.cardField.focus();
            }, 0);
          }}
        >
          Add a card +
        </button>
      </div>
    );
  }
}

export default Column;
