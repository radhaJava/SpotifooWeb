//project files
import React, { useState, useEffect } from "react";
import Page from "./Page";

const Home = () => {
  const [musicList, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/music/")
      .then((response) => response.json())
      .then((res) => {
        setData(res);
        console.log("resonse", musicList);
        if (musicList && musicList.length) {
        }
      });
  }, []);

  return (
    <div className ="card-group">
      {musicList &&
        musicList.length > 0 &&
        musicList.map((item: any) => <Page carddetails={item} />)}
    </div>
  
  );
};
export default Home;
