import "./edit.css"
function EditProfile() {
    return ( <>
<form className="editProfile" >
  <input type="text" className="m-2" placeholder="user name"/>
    <input type="text"  className="m-2" placeholder="user city"/>
    <input type="text"  className="m-2"  placeholder="user job"/>
    <input type="file"  className="m-2" name="select image" />
    
<input type="submit"/>
</form>
    </> );
}

export default EditProfile;