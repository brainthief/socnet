import React from 'react'

const Dialogs = () => {
 return (
  <div className="content">
   <div className="contentText">
    <div className="dialogWrap">
     <div className="peopleList">
      <div>User 1</div>
      <div>User 2</div>
      <div>User 3</div>
      <div>User 4</div>
     </div>
     <div className="messageList">
      <div className="msgMy">
       <div className="author">Me</div>
       <div className="msg">Hi! How are you?</div>
      </div>
      <div className="msgOther">
       <div className="author">User 1:</div>
       <div className="msg">It's ok. How are you?</div>
      </div>
      <div className="msgMy">
       <div className="author">Me</div>
       <div className="msg">Hi! How are you?</div>
      </div>
      <div className="msgMy">
       <div className="author">Me</div>
       <div className="msg">Hi! How are you?</div>
      </div>
      <div className="msgOther">
       <div className="author">User 1:</div>
       <div className="msg">It's ok. How are you?</div>
      </div>
      <div className="msgOther">
       <div className="author">User 1:</div>
       <div className="msg">It's ok. How are you?</div>
      </div>
      <div className="msgOther">
       <div className="author">User 1:</div>
       <div className="msg">It's ok. How are you?</div>
      </div>
      <div className="msgOther">
       <div className="author">User 1:</div>
       <div className="msg">It's ok. How are you?</div>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default Dialogs