import React from "react";

function Confirmation({}) {

  return (
        <div>
            <p>Are you sure you want to delete this element?</p>
            <ul class="cd-buttons">
                <li><a href="#0">Yes</a></li>
                <li><a href="#0">No</a></li>
            </ul>
            <a href="#0" class="cd-popup-close img-replace">Close</a>
        </div> 
  )
}

export default Confirmation;