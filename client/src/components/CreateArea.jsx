import React from "react";
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  
  var [note,setNote]=React.useState({title:"",content:""});
  var [clicked,isClicked]=React.useState(false);
  
  function handle(event){
    const {name,value}=event.target;
    setNote({...note,[name]:value});
  }
  function submit(event){
    event.preventDefault();
    props.onAdd(note);
    isClicked(false);
    setNote({title:"",content:""});
  }
  document.addEventListener("click",(e)=>{
    const checktitle=e.target.closest("#clicktitle");
    const checkcontent=e.target.closest("#contentbox");
    if(!checkcontent && !checktitle) isClicked(false);
  })

  return (
    <div>
      <form className="mainForm" >
        <input id="clicktitle" onChange={handle} name="title" value={note.title} onClick={()=> isClicked(!clicked)} placeholder="Title" />
        {clicked && <textarea id="contentbox" onChange={handle} name="content" value={note.content} placeholder="Take a note..." rows="3" />}
        {clicked && <Zoom in={true}>
          <button type="submit" onClick={submit}>+</button>
        </Zoom>}
      </form>
    </div>
  );
}

export default CreateArea;
