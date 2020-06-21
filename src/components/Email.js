import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import "./components.css";

const Email = () => {
    const [emailInfo, SetEmailInfo] = useState({
        feedback: '', 
        name: 'Gus', 
        email: 'austinkelsay11@gmail.com'
    })

    const handleChange = (e) => {
        SetEmailInfo({feedback: e.target.value})
    }
    
    const sendFeedback = (templateId, variables) => {
        window.emailjs.send(
            'austinkelsay11@gmail.com', templateId,
            variables
            ).then(res => {
                console.log('Email successfully sent!')
            })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
        }
        
        const handleSubmit = (e) => {
            const templateId = 'template_h6G3qViL';
        
            sendFeedback(templateId, {message_html: emailInfo.feedback, from_name: emailInfo.name, reply_to: emailInfo.email})
          }


    return(
        <form className="test-mailing">
            <h1>Let's see if it works</h1>
            <div>
                <textarea
                    id="test-mailing"
                    name="test-mailing"
                    onChange={handleChange}
                    placeholder="Post some lorem ipsum here"
                    required
                    value={emailInfo.feedback}
                    style={{width: '100%', height: '150px'}}
                />
            </div>
            <Button onClick={handleSubmit} variant="outlined" color="primary">
                Send
            </Button>
  	    </form>
    )
}

export default Email;