import "./write.css"

export default function Write() {
  return (
    <div className="write">
       <img className="writeImg" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?cs=srgb&dl=pexels-syed-qaarif-andrabi-6685428.jpg&fm=jpg" alt="" />
    <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"/>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
        <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
    </form>
    </div>
  )
}
