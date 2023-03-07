import React, { useRef } from 'react'

function BookInfo(props) {
    const imageInputRef=useRef(null)
    const bookInputRef=useRef(null)
    const handleInputChange=(e)=>{
        if (e.target.name == 'bookName') {
            props.setBookData({ ...props.bookData, bookName: e.target.value })
            props.setBookErrs({
                ...props.bookErrs,
                bookName: e.target.value.length == 0 ? "This Field is Required" : (e.target.value.length < 3 ? "Min Length is 3 Characters" : '')
            })
        } else if (e.target.name == 'bookDescription') {
            props.setBookData({ ...props.bookData, bookDescription: e.target.value })
            props.setBookErrs({
                ...props.bookErrs,
                bookDescription: e.target.value.length == 0 ? "This Field is Required" : (e.target.value.length < 30 ? "Min Length is 30 Characters" : '')
            })
        } else if (e.target.name == 'bookImage') {
            
            // console.log(imageName);
            props.setBookData({ ...props.bookData, bookImage: e.target.files[0] })
            props.setBookErrs({
                ...props.bookErrs,
                bookImage: ''
            })
        } 
        else if (e.target.name == 'book') {
            
            // console.log(imageName);
            props.setBookData({ ...props.bookData, book: e.target.files[0] })
            props.setBookErrs({
                ...props.bookErrs,
                book: ''
            })}
        else {
            props.setBookData({ ...props.bookData, bookCategory: e.target.value })
            props.setBookErrs({
                ...props.bookErrs,
                bookCategory: e.target.value == '' ? "This Field is Required" :  ''
            })
        }
    }
  return (
    <div>
    <div className="mb-3">
        <label htmlFor="book-name" className="form-label">Book Name:</label>
        <input placeholder='Book Name' type="text" className="form-control" name='bookName' value={props.bookData.bookName} id="book-name" aria-describedby="bookNameHelp" onChange={handleInputChange} />
        {props.bookErrs.bookName ? <div className='text-danger'>{props.bookErrs.bookName}</div> : null}
    </div>
    <div className="mb-3">
        <label htmlFor='book-category' className='form-label' name='bookCategory'>Book Category:</label>
        <select value={props.bookData.bookCategory} className="form-select" aria-label="Default select example" id="book-category" onChange={handleInputChange}>
            <option value="">Select Category</option>
            <option value="Dealing_with_children_with_special_needs">Dealing with children with special needs</option>
            <option value="Teaching_strategies">Teaching strategies</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Mental_Skills">Mental Skills</option>
            <option value="Human_Development">Human Development</option>
            <option value="Science">Science</option>
            <option value="Educational_games">Educational games</option>
            <option value="Digital_transformation">Digital transformation</option>
            <option value="Discipline_methods">Discipline methods</option>
        </select>
        {props.bookErrs.bookCategory ? <div className='text-danger'>{props.bookErrs.bookCategory}</div> : null}
    </div>

    <div className="mb-3">
        <label htmlFor="book-img" className="form-label" name='bookImage'>Book Image:</label>
        <input ref={imageInputRef} type="file" accept="image/*" placeholder='BookImage' className="form-control d-none" id="book-img" name='bookImage' onChange={handleInputChange}></input>
        <div className='d-flex'>
        <button onClick={()=>imageInputRef.current.click()}  className='btn btn-secondary'>Choose File</button>
        <label className='mt-auto ms-2 d-block'>{props.bookData.bookImage.name?props.bookData.bookImage.name: ' No file is selected'}</label>
        </div>
        {props.bookErrs.bookImage ? <div className='text-danger'>{props.bookErrs.bookImage}</div> : null}

    </div>
    <div className="mb-3">
        <label htmlFor="book-description" className="form-label">Book Description:</label>
        <textarea placeholder='Book Description' name='bookDescription' className="form-control" id="book-description" value={props.bookData.bookDescription} onChange={handleInputChange}></textarea>
        {props.bookErrs.bookDescription ? <div className='text-danger'>{props.bookErrs.bookDescription}</div> : null}

    </div>
    <div className="mb-3">
        <label htmlFor="book-img" className="form-label" name='bookImage'>Book:</label>
        <input ref={bookInputRef} type="file" accept="application/pdf" placeholder='Book' className="form-control d-none" id="book" name='book' onChange={handleInputChange}></input>
        <div className='d-flex'>
        <button onClick={()=>bookInputRef.current.click()}  className='btn btn-secondary'>Choose File</button>
        <label className='mt-auto ms-2 d-block'>{props.bookData.book.name?props.bookData.book.name: ' No file is selected'}</label>
        </div>
        {props.bookErrs.book ? <div className='text-danger'>{props.bookErrs.book}</div> : null}

    </div>
</div>
  )
}

export default BookInfo