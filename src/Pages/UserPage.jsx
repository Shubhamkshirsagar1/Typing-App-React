import React, { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { CircularProgress } from "@mui/material";
import ResultTable from "../Components/ResultTable";
import Graphs from "../Components/Graphs";
import UserCard from "../Components/UserCard";

const UserPage = () => {
  const [data, setData] = useState([]);
  const [user, loading] = useAuthState(auth);
  const [dataLoading, setDataLoading] = useState(true);
  const [graphData, setGraphData] = useState([]);

  const fetchUserData = () => {
    const resultsRef = db.collection("Results");
    const { uid } = auth.currentUser;

    let tempData = [];
    let tempGraphData = [];
    resultsRef
      .where("userId", "==", uid)
      .orderBy("timeStamp", "desc")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          tempData.push({ ...doc.data() });
          tempGraphData.push([
            doc.data().timeStamp.toDate().toLocaleString().split(",")[0],
            doc.data().wpm,
          ]);
        });
        setData(tempData);
        setGraphData(tempGraphData.reverse());
        setDataLoading(false);
      });
  };

  useEffect(() => {
    if (!loading && user) {
      fetchUserData();
    }
  }, [loading]);

  if (!loading && !user) {
    return (
      <div className="screen-center">
        <span>Login to view results</span>
      </div>
    );
  }

  if (loading || dataLoading) {
    return (
      <div className="screen-center">
        <CircularProgress size={200} />
      </div>
    );
  }

  return (
    <div className="canvas">
      <UserCard totalTests={data.length} />
      <div className="user-page-graph">
        <h1>Graph</h1>
        <Graphs graphData={graphData} />
      </div>
      <div>
        <h1>Result Table</h1>
        <ResultTable data={data} />
      </div>
    </div>
  );
};

export default UserPage;
