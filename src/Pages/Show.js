import React from "react";
import { useParams } from "react-router-dom";
import EntryDetails from "../components/EntryDetails"

function Show() {
  let { id } = useParams();

  return (
    <div className="show">
      <EntryDetails entryID={id} />
    </div>
  );
}

export default Show