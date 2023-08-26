import React from "react";
import { useParams } from "react-router-dom";
import EntryDetails from "../components/EntryDetails"

function Show() {
  let { id } = useParams();

  return (
    <div className="show">
      <h3>Show Page, which has the EntryDetails element below </h3>
      <EntryDetails entryID={id} />
    </div>
  );
}

export default Show