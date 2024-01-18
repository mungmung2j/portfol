import React, { useRef } from "react";
import '../styles/contact.scss'
import emailjs from '@emailjs/browser';

export default function Contact(){
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();  
      emailjs.sendForm('service_01qb0b4', 'template_6zlm0x4', form.current, 'T5CitO52MXWbpSq_H')
        .then((result) => {
            console.log(result.text);
            alert("전송되었습니다.");
        }, (error) => {
            console.log(error.text);
            alert("전송을 실패했습니다.");
        });
    };

    return(
        <div id="contact">
            <section id="section4">
                <h2>
                    읽어주셔서 감사합니다.<br/>
                    Thank You
                </h2>
                <p>메세지 남겨주시면 답장 드리겠습니다.</p>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input id="input-name" type="text" name="from_name" />
                    <label>Email</label>
                    <input id="input-email" type="email" name="user_email" />
                    <label>Message</label>
                    <textarea id="textArea" name="message" />
                    <button id="contact-submit" type="submit">Send</button>
                </form>
            </section>
        </div>
    )
}