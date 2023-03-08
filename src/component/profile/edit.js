import "./edit.css"
function EditProfile() {
    return ( <>
<form className="editProfile text-center " >
  <input type="text" className="m-2" placeholder="user name"/>
    <input type="text"  className="m-2" placeholder="user city"/>
    <input type="text"  className="m-2"  placeholder="user job"/>
    <label htmlFor="course-img " className="text-white" name='courseImage'>Course Image:</label>
    <input type="file" accept="image/*" id="course-img"  className="mt-1 text-white" name="select image"  />
    <button className="btn btn-primary" type="submit">OK</button>
    
</form>
    </> );
}

export default EditProfile;