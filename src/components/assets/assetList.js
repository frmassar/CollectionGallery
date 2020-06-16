import React, { useState } from "react";
import AssetElement from "./assetElement";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginRight: "6%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function AssetList(props) {
  const classes = useStyles();

  const [tri, setTri] = useState("name");

  const isSelected = (assetId) => {
    return props.collection.masterAsset.id === assetId;
  };

  const handleChange = (e) => {
    props.updateSort(e.target.value);
    setTri(e.target.value);
  };

  console.log("ASSETLIST UPDATED");
  return (
    <div className="containerAsset">
      <div className="containerSelect">
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Sorted by</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tri}
            onChange={handleChange}
          >
            <MenuItem value={"name"}>name</MenuItem>
            <MenuItem value={"id"}>id</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="containerAssetCard">
        {props.assets.map((asset) => {
          return (
            <AssetElement
              key={asset.id}
              selected={isSelected(asset.id)}
              updateMasterAsset={props.updateMasterAsset}
              asset={asset}
            ></AssetElement>
          );
        })}
      </div>
    </div>
  );
}
