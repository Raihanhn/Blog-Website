import { useEffect } from "react";
import { useState } from "react";
import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";
import "./home.css";
import axios from "axios"

export default function Home() {
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
     const fetchPosts = async ()=>{
      const res = await axios.get("/posts");
      console.log(res);
     }
     fetchPosts()
  },[]);
  return (
    <>
     <Header/>
    <div className="home">
     <Posts/>
     <Sidebar/>
    </div>
    </>
  )
}
