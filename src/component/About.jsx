import React from 'react';

export default function About(props) {
    return (
        <div className='container my-2' style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'#042743'}}>
            <h1 className='my-2'>About Us</h1>
            <div className="accordion" id="accordionExample"  style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'#042743'}}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button"  style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'#042743'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Text Manipulation
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body"  style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'#042743'}}>
                            Textutils provide a new way to manipulate the text as you want. You can convert to uppercase, lowercase, remove extra spaces, trim spaces, copy text to the clipboard, and clear text from the text area.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed"  style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'#042743'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Fast Loading
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body"  style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'#042743'}}>
                            Textutils fast loading website which is load fastly in the browser so it consumes the loading time and user friendly also. it loads in the browser very fastly and works too fast and efficiently manner.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed"  style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'#042743'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Free of cost
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body"  style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'#042743'}}>
                            Textutils are free of cost. so anybody uses this application without paying any cost for services. 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}