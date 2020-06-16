import React, { useEffect, useState } from "react";
import "./App.css";
import CollectionsList from "./components/collections/collectionsList";
import {
  getCollectionsAsync,
  getAssetByIdAsync,
  getAssetsByCollectionAsync,
} from "./components/data";
import AssetList from "./components/assets/assetList";
import Header from './components/header/header'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';



function App(props) {

  const [collections, setCollections] = useState(null);
  const [selectedAssets, setSelectedAssets] = useState(null);

  
  useEffect(() => {
    getCollectionsAsync().then((collections) => {
      const promises = collections.map((c) =>
        getAssetByIdAsync(c.masterAssetId)
      );
      Promise.all(promises).then(([...masterAssets]) => {
        setCollections(
          collections.map((c) => ({
            ...c,
            masterAsset: masterAssets.find((ma) => ma.id === c.masterAssetId),
          }))
        );
      });
    });
  }, []);

  const selectCollection = (id) => {
    console.log("selectCollection", id);
    getAssetsByCollectionAsync(id).then((assets) => {
      setSelectedAssets(sort(assets, "name"));
    });
  };

  const updateMasterAsset = (newAsset) => {
    console.log("updateMasterAssetId", newAsset.collectionId, newAsset.id);

    const newCollections = collections.map((collection) => {
      if (collection.id === newAsset.collectionId) {
        return {
          ...collection,
          masterAsset: newAsset,
        };
      } else return collection;
    });

    setCollections(newCollections);
  };

  const getCollectionById = (id) => {
    return collections.find((c) => c.id === id);
  };

  const sort = (array, key) => {
    return array.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  };

  const updateSort = (key) => {
    const sorted = sort([...selectedAssets], key);
    console.log("updateSort", sorted);
    setSelectedAssets(sorted);
  };


  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        {collections && (
          <>
            <CollectionsList
              selectCollection={selectCollection}
              collections={collections}
            ></CollectionsList>
            {selectedAssets? (
              <AssetList
                updateSort={updateSort}
                updateMasterAsset={updateMasterAsset}
                assets={selectedAssets}
                collection={getCollectionById(selectedAssets[0].collectionId)}
              ></AssetList>
            ):(  
            <div className="selectingCollection">
              <ArrowBackIcon></ArrowBackIcon>
              <h1>Choose a collection</h1>
            </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
