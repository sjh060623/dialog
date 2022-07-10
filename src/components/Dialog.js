import { dbService, storageService } from "fbase";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Dialog = ({ dialogObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newDialog, setNewDialog] = useState(dialogObj.text);
  const onDeleteClick = async () => {
    const ok = window.confirm("Delete this dialog?");
    if (ok) {
      await dbService.doc(`dialogs/${dialogObj.id}`).delete();
      await storageService.refFromURL(dialogObj.attachmentUrl).delete();
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`dialogs/${dialogObj.id}`).update({
      text: newDialog,
    });
    setEditing(false);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDialog(value);
  };

  return (
    <div
      className="nweet"
      style={{ alignItems: "center", textAlign: "center" }}
    >
      {editing ? (
        <>
          <form onSubmit={onSubmit} className="container nweetEdit">
            <textarea
              type="text"
              placeholder="input&#13;&#10;qwdqwd"
              onChange={onChange}
              value={newDialog}
              required
              autoFocus
              className="formInput"
            />
            <input type="submit" value="Update Nweet" className="formBtn" />
          </form>
          <span onClick={toggleEditing} className="formBtn cancelBtn">
            Cancel
          </span>
        </>
      ) : (
        <>
          <h4>{dialogObj.text}</h4>
          {dialogObj.attachmentUrl && <img src={dialogObj.attachmentUrl} />}

          {isOwner && (
            <div class="nweet__actions">
              <span onClick={onDeleteClick}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
              <span onClick={toggleEditing}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Dialog;
