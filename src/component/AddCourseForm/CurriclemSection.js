import React, { useState } from 'react'
import { v4 } from 'uuid'

import './CurriclemSection.css'
function CurriclemSection(props) {
  const [isAdd, setIsAdd] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [editedSection, setEditedSection] = useState('')
  const [editedSectionErr, setEditedSectionErr] = useState(null)
  const [isContentAdd, setIsContentAdd] = useState(false)
  const [questions, setQuestions] = useState([])
  const [videoLink, setVideoLink] = useState('')
  const [videoLinkErr, setVideoLinkErr] = useState(null)
  const [curriclemItem, setCurriclemItem] = useState({ curriclemName: '', curriclemType: 'Lecture', curriclemContent: [] })
  const [quizQuestion, setQuizQuestion] = useState({ question: '', answerA: '', answerB: '', answerC: '', answerD: '', rightAnswer: '' })
  const [quizQuestionErr, setQuizQuestionErr] = useState({ question: null, answerA: null, answerB: null, answerC: null, answerD: null, rightAnswer: null })
  const [curriclemItemErr,setCurriclemItemErr]=useState({
    curriclemName: null, curriclemType: null, curriclemContent: null
  })
  const handleInputChange = (e) => {
    if (e.target.name == 'curriclemName') {
      setCurriclemItem({ ...curriclemItem, curriclemName: e.target.value })
      setCurriclemItemErr({...curriclemItemErr,
      curriclemName: e.target.value.length == 0 ? "This Field is Required":''
      })
    } else if (e.target.name == 'curriclemType') {
      setCurriclemItem({ ...curriclemItem, curriclemType: e.target.value })
      setCurriclemItemErr({...curriclemItemErr,
        curriclemType: e.target.value.length == 0 ? "This Field is Required":''
        })
    } else if (e.target.name == 'question') {
      setQuizQuestion({ ...quizQuestion, question: e.target.value })
      setQuizQuestionErr({...quizQuestionErr,question:e.target.value.length==0?'This field is required':''})
    } else if (e.target.name == 'answerA') {
      setQuizQuestion({ ...quizQuestion, answerA: e.target.value })
      setQuizQuestionErr({...quizQuestionErr,answerA:e.target.value.length==0?'This field is required':''})

    } else if (e.target.name == 'answerB') {
      setQuizQuestion({ ...quizQuestion, answerB: e.target.value })
      setQuizQuestionErr({...quizQuestionErr,answerB:e.target.value.length==0?'This field is required':''})

    } else if (e.target.name == 'answerC') {
      setQuizQuestion({ ...quizQuestion, answerC: e.target.value })
      setQuizQuestionErr({...quizQuestionErr,answerC:e.target.value.length==0?'This field is required':''})

    } else if (e.target.name == 'answerD') {
      setQuizQuestion({ ...quizQuestion, answerD: e.target.value })
      setQuizQuestionErr({...quizQuestionErr,answerD:e.target.value.length==0?'This field is required':''})

    } else if (e.target.name == 'rightAnswer') {
      setQuizQuestion({ ...quizQuestion, rightAnswer: e.target.value })
      setQuizQuestionErr({...quizQuestionErr,rightAnswer:e.target.value.length==0?'This field is required':''})

    } else if (e.target.name == 'videoLink') {
      setVideoLink(e.target.value)
      setVideoLinkErr(e.target.value.length==0?'This field is required':
      (!/^(https?\:\/\/)?(www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})$/i.test(e.target.value))
      ?'Not a valid youtube URL':'')
    } else if (e.target.name == 'edit') {
      setEditedSection(e.target.value)
      setEditedSectionErr(e.target.length==0?'This field is required':'')
    }
  }
  const addQuestion = () => {
    if(quizQuestion.question==''||quizQuestion.answerA==''||quizQuestion.answerB==''||quizQuestion.answerC==''||quizQuestion.answerD==''||quizQuestion.rightAnswer==''){
      
      setQuizQuestionErr({ rightAnswer: quizQuestion.rightAnswer == "" ? 'this field is required' : '', answerA: quizQuestion.answerA == "" ? 'this field is required' : quizQuestionErr.answerA, answerB: quizQuestion.answerB == "" ? 'this field is required' : quizQuestionErr.answerB, answerC: quizQuestion.answerC == "" ? 'this field is required' : quizQuestionErr.answerC,answerC: quizQuestion.answerC == "" ? 'this field is required' : quizQuestionErr.answerC,answerD: quizQuestion.answerD == "" ? 'this field is required' : quizQuestionErr.answerD,question: quizQuestion.question == "" ? 'this field is required' : quizQuestionErr.question })

    }
    else{
    setQuestions([...questions, quizQuestion])
    setQuizQuestion({ question: '', answerA: '', answerB: '', answerC: '', answerD: '', rightAnswer: '' })}
  }
  const addContent = () => {
    if(videoLink==''||videoLinkErr){
      if(videoLink=='')setVideoLinkErr('This field is required')
      console.log('here');
    }
    if(questions==[]){}
    else{const newSections = [...props.courseData.courseSections];
    let objIndex = newSections.findIndex((obj) => obj.sectionName == props.section.sectionName);

    const section = props.courseData.courseSections.filter((section) => section.sectionName == props.section.sectionName)[0]
    
      if (curriclemItem.curriclemType == 'Lecture') {
      if(videoLinkErr){}
      else {newSections[objIndex].sectionContent = [...section.sectionContent, { ...curriclemItem, curriclemContent: videoLink, curriclemId: curriclemItem.curriclemName.replace(/\s/g, "") + v4() }]}
      setVideoLink('')
    } else {
      
      newSections[objIndex].sectionContent = [...section.sectionContent, { ...curriclemItem, curriclemContent: questions, curriclemId: curriclemItem.curriclemName.replace(/\s/g, "") + v4() }]
      setQuestions([])
    }
    props.setCourseData({ ...props.courseData, courseSections: newSections })
    setIsContentAdd(false)
  }
  }

  return (
    <>
      {isEdit ? <div className="mb-3">
        <label htmlFor="section-name" className="form-label">Section Name:</label>
        <div className='d-flex'>
          <input placeholder='Section Name' id='section-name' value={editedSection} type="text" className="form-control" name='edit' onChange={handleInputChange} />
          <button className='btn btn-secondary ms-3' onClick={() => { props.Edit(editedSection); setIsEdit(false); setEditedSection('') }}><i className="fa-solid fa-pen"></i></button>
        </div>
        {editedSectionErr ? <div className='text-danger'>{editedSectionErr}</div> : null}
        </div> : null}
      <div className='course-section-container'>
        <h5 className='text-start'>Section {props.sectionNumber}: {props.section.sectionName}</h5>
        <span className='addCourseDeleteIcon '><i onClick={() => props.handleSectionDelete(props.sectionNumber)} class="text-secondary fa-solid fa-trash"></i></span>
        <span className='addCourseEditIcon '><i onClick={() => { setIsEdit(true); props.handleSectionEdit(props.sectionNumber) }} class="text-secondary fa-solid fa-pen"></i></span>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Curriclem type</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            {props.section.sectionContent.map((content, index) => (<tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{content.curriclemType}</td>
              <td>{content.curriclemName}</td>
            </tr>))}
          </tbody>
        </table>
        {isAdd ? <div className='d-flex'>
          <div className="mb-3 me-3">
            <select className="form-select" aria-label="Default select example" id="curriclem-type" name='curriclemType' onChange={handleInputChange}>
              <option value="Lecture">Lecture</option>
              <option value="Quiz">Quiz</option>
            </select>
          </div>
<div className='d-flex flex-column'>
          <div>
            <input placeholder='Name' id='name' type="text" className="form-control" name='curriclemName' onChange={handleInputChange} />
          </div>
          {curriclemItemErr.curriclemName ? <div className='text-danger'>{curriclemItemErr.curriclemName}</div> : null}
          </div>
          <button className='btn btn-secondary ms-3 mb-3' onClick={() => { if(curriclemItem.curriclemName!='')setIsContentAdd(true) }}><i className="fa-solid fa-file-circle-plus"></i> Add Content</button>
        </div> : null}
        {isContentAdd ? (
          curriclemItem.curriclemType == 'Lecture' ? (
           <div className='mb-3'> <div className=" d-flex">
              <input placeholder='Video Link' id='video-name' type="text" className="form-control" value={videoLink} name='videoLink' onChange={handleInputChange} />
              <button className='btn btn-secondary ms-3' onClick={addContent}><i className="fa-solid fa-plus"></i></button>
            </div>              
            {videoLinkErr?<div className='text-danger'>{videoLinkErr}</div>:null}
</div>) : (<>
              <h6>Quiz Questions </h6>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Question</th>
                    <th scope="col">Answer A</th>
                    <th scope="col">Answer B</th>
                    <th scope="col">Answer C</th>
                    <th scope="col">Answer D</th>
                    <th scope="col">Right Answer</th>
                  </tr>
                </thead>
                <tbody>
                  {questions.map((question) => <tr>
                    <th scope="row">{question.question}</th>
                    <td>{question.answerA}</td>
                    <td>{question.answerB}</td>
                    <td>{question.answerC}</td>
                    <td>{question.answerD}</td>
                    <td>{question.rightAnswer}</td>
                  </tr>)}
                </tbody>
              </table>

              <div className='mb-3'>
                <input placeholder='Question' value={quizQuestion.question} id='question' type="text" className="form-control" name='question' onChange={handleInputChange} />
                {quizQuestionErr.question ? <div className='text-danger'>{quizQuestionErr.question}</div> : null}

                <div className='row mt-3 justify-content-between'>
                  <div className='col-6 mb-3'>
                    <input placeholder='Answer A' value={quizQuestion.answerA} id='answerA' type="text" className="form-control" name='answerA' onChange={handleInputChange} />
                  {quizQuestionErr.answerA ? <div className='text-danger'>{quizQuestionErr.answerA}</div> : null}</div>
                  

                  <div className='col-6 mb-3'>
                    <input placeholder='Answer B' value={quizQuestion.answerB} id='answerB' type="text" className="form-control" name='answerB' onChange={handleInputChange} />
                  {quizQuestionErr.answerB ? <div className='text-danger'>{quizQuestionErr.answerB}</div> : null}</div>
                  

                  <div className='col-6 mb-3'>
                    <input placeholder='Answer C' value={quizQuestion.answerC} id='answerC' type="text" className="form-control" name='answerC' onChange={handleInputChange} />
                  {quizQuestionErr.answerC ? <div className='text-danger'>{quizQuestionErr.answerC}</div> : null}</div>
                  

                  <div className='col-6 mb-3'>
                    <input placeholder='Answer D' value={quizQuestion.answerD} id='answerD' type="text" className="form-control" name='answerD' onChange={handleInputChange} />
                  {quizQuestionErr.answerD ? <div className='text-danger'>{quizQuestionErr.answerD}</div> : null}</div>
                  

                </div>
                <div className='d-flex'>
                  <select className="form-select" aria-label="Default select example" id="rightAnswer" name='rightAnswer' onChange={handleInputChange}>
                    <option value={quizQuestion.answerA}>{quizQuestion.answerA}</option>
                    <option value={quizQuestion.answerB}>{quizQuestion.answerB}</option>
                    <option value={quizQuestion.answerC}>{quizQuestion.answerC}</option>
                    <option value={quizQuestion.answerD}>{quizQuestion.answerD}</option>
                  </select>
                  

                  <button className='btn btn-secondary ms-3' onClick={addQuestion}><i className="fa-solid fa-plus"></i></button>
                </div>{quizQuestionErr.rightAnswer ? <div className='text-danger'>{quizQuestionErr.rightAnswer}</div> : null}
                <button className='btn btn-secondary mt-3' onClick={addContent}><i className="fa-solid fa-plus"></i> Add Quiz</button>
              </div>
            </>
          )) : null}
        <button className='btn btn-secondary mb-3' onClick={() => { setIsAdd(true) }}><i className="fa-solid fa-plus"></i> Add Curriclem Item</button>
      </div></>
  )
}

export default CurriclemSection