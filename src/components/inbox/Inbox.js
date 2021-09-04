import React from 'react'
import "./inbox.css"

const Inbox = () => {
   return (
      <>
       <div className="inbox-container">
          <div className="inbox-row">
            <p>Deliciousness to your inbox</p>
            <p>Enjoy weekly hand picked recipes
                and recommendations</p>
            <input type="text" placeholder="Enter email" />
            <button>JOIN</button>
            <p>By joining our newsletter you agree to our <p className="condition">Terms and Conditions</p></p>
          </div>
       </div>  
      </>
   )
}

export default Inbox
