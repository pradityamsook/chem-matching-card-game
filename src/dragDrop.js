import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Image from "react-bootstrap/Image";
import { uuid } from "uuidv4";

const itemsFromBackend = [
  { id: uuid(), content: "Beaker" },
  { id: uuid(), content: "Burette" },
];

const columnsFromBackend = {
  [uuid()]: {
    name: "Beaker",
    image: require("./images/beaker.jpg"),
    items: itemsFromBackend,
  },
};

const DragDrop = () => {
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "50%" }}>
      <DragDropContext onDropEnd={(result) => console.log(result)}>
        {Object.entries(columns).map(([id, column]) => {
          return (
            <Droppable droppableId={id}>
              {(provide, snapshot) => {
                return (
                  <div
                    {...provide.droppableProps}
                    ref={provide.innerRef}
                    className="frame"
                    style={{
                      background: snapshot.isDraggingOver
                        ? "lightblue"
                        : "white",
                      padding: 4,
                      width: 250,
                      minHeight: 500,
                    }}
                  >
                    <Image
                      className="resize"
                      src={column.image.default}
                      alt={column.name}
                    />

                    {column.items.map((item, index) => {
                      return (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provide, snapshot) => {
                            return (
                              <div
                                ref={provide.innerRef}
                                {...provide.draggableProps}
                                {...provide.dragHandleProps}
                                style={{
                                  userSelect: "none",
                                  padding: 16,
                                  margin: "0 0 2px 0",
                                  minHeight: "5px",
                                  background: snapshot.dragging
                                    ? "#2198e7"
                                    : "#2198e7",
                                  color: "white",
                                  ...provide.draggableProps.style,
                                }}
                              >
                                {item.content}
                              </div>
                            );
                          }}
                        </Draggable>
                      );
                    })}
                  </div>
                );
              }}
            </Droppable>
          );
        })}
      </DragDropContext>
    </div>
  );
};

export default DragDrop;
