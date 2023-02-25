// Import React library
import React from "react";

// Create a functional component called DragAndDrop that takes props as input
const DragAndDrop = (props) => {

// Create event handlers for drag and drop events
const handleDragEnter = (e) => {
e.preventDefault();
e.stopPropagation();
};
const handleDragLeave = (e) => {
e.preventDefault();
e.stopPropagation();
};
const handleDragOver = (e) => {
e.preventDefault();
e.stopPropagation();
};
const handleDrop = (e) => {
e.preventDefault();
e.stopPropagation();
};

// Return the JSX that will be rendered to the DOM
return (
<div
className={"drag-drop-zone"}
onDrop={(e) => handleDrop(e)}
onDragOver={(e) => handleDragOver(e)}
onDragEnter={(e) => handleDragEnter(e)}
onDragLeave={(e) => handleDragLeave(e)}
>
<p>Drag files here to upload</p>
</div>
);
};

// Export the component as the default export
export default DragAndDrop;