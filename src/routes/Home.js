import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dialog from "components/Dialog";
import DialogFactory from "components/DialogFactory";
import { dbService } from "fbase";
import React, { useEffect, useState } from "react";

const Home = ({ userObj }) => {
  const [dialogs, setDialogs] = useState([]);
  const [yoil, setYoil] = useState(0);
  const [curyoil, setCurYoil] = useState("");
  useEffect(() => {
    dbService
      .collection("dialogs")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const dialogArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDialogs(dialogArray);
        yoilCount();
      });
  }, []);

  function yoilCount() {
    setYoil(new Date().getDay());
    if (yoil === 0) {
      setCurYoil("일");
    } else if (yoil === 1) {
      setCurYoil("월");
    } else if (yoil === 2) {
      setCurYoil("화");
    } else if (yoil === 3) {
      setCurYoil("수");
    } else if (yoil === 4) {
      setCurYoil("목");
    } else if (yoil === 5) {
      setCurYoil("금");
    } else if (yoil === 6) {
      setCurYoil("토");
    }
  }

  return (
    <div className="container">
      <DialogFactory userObj={userObj} />
      <div style={{ marginTop: -20 }}>
        <h1
          style={{
            marginBottom: 20,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Lotto
        </h1>
        <div
          style={{
            textAlign: "center",
            alignItems: "center",
            padding: 10,
          }}
        >
          <span style={{ color: "gray" }}>
            오늘 | {new Date().getFullYear()}. {new Date().getMonth() + 1}.{" "}
            {new Date().getDate()}({curyoil})
          </span>
        </div>
        {dialogs.map((dialog) => (
          <Dialog
            key={dialog.id}
            dialogObj={dialog}
            isOwner={dialog.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
