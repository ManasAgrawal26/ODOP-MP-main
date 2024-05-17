import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="page-wrapper1"> 
            <header>
                <h1>Contact Us</h1>
            </header>

            <section className="consec">
                <h2>Send us a message</h2>
                <form>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder='Name' />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email"placeholder='Email' />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" placeholder='Type the message here...'></textarea>
                    </div>
                    <button className='btnsub' type="submit">Send</button>
                </form>
            </section>
        </div>
  )
}

export default Contact