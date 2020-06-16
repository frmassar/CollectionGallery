import React from "react";
import CollectionElement from "./collectionElement";


function CollectionsList(props) {
  return (
    <div className="containerCollection">
      {props.collections.map((collection, index) => {
        return (
          <div  key={index} >
            <CollectionElement
              key={collection.id}
              collection={collection}
              selectCollection={props.selectCollection}
            ></CollectionElement>
          </div>  
        );
      })}
    </div>
  );
}

export default CollectionsList;
