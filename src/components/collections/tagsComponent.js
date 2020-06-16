import React from "react";
import Chip from '@material-ui/core/Chip';

export default function TagsComponent({ tags }) {

  const tagsList = [];

  const recursiveFunction = (tag) => {
    if (!tag?.name) return;
    tagsList.push(tag.name);
    recursiveFunction(tag.subTag);
  };

  recursiveFunction(tags);

  return (
    <div className="containerTags">
      {tagsList.map((tag, i) => (
        <Chip size="small" variant="outlined" key={i} label={tag}>
        </Chip>
      ))}
    </div>
  );
}
