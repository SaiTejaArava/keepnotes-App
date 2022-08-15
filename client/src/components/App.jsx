import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function App() {
  var [notes,setNotes]=React.useState([]);
  var [userData,setUserData]=React.useState({});
  var [noteslen,setNotesLen]=React.useState(0);
  axios.defaults.withCredentials=true;
  React.useEffect(()=>{
    if(userData.email)
    axios.post("/api",{email:userData.email}).then(response=> {
      setNotes(response.data.data);
      console.log();
    }).catch(err=> console.log(err));
  },[userData]);

  
  async function addNotes(note){
    await axios.post("/addNote",{...note,id:userData._id}).then(response=> {
      console.log(response.data);
    }).catch(err=> console.log(err));
    await axios.post("/api",{email:userData.email}).then(response=> {
      setNotes(response.data.data);
    }).catch(err=> console.log(err));
    console.log("Notes-",notes);
  }
  async function deleteNote(id){
    await axios.post("/delete",{...userData,noteId:id}).then(response=> console.log("delete-note-res-",response.data)).catch(err=> console.log(err));
    await axios.post("/api",{email:userData.email}).then(response=> {
      console.log("updated in delete");
      setNotes(response.data.data);
    }).catch(err=> console.log(err));
    console.log("Notes-",notes);
  }

  const getUserData=(data)=>{
    console.log("from app",data.email);
    setUserData(data);
  }

  const removeData=()=>{
    setNotes([]);
  }
  useEffect(()=>{
    setNotesLen(notes.length);
  },[noteslen]);

  return (
    <div >
      <Header getData={getUserData} signOut={removeData}/>
      <CreateArea onAdd={addNotes} />
      {notes? notes.map((x)=> <Note key={x._id} id={x._id} title={x.title} content={x.content} onremove={deleteNote} />):<></>}
      <Footer />
    </div>
  );
}

export default App;
