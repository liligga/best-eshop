import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faLocationDot,
    faEarthAsia,
    faPhone,
    faAt
} from "@fortawesome/free-solid-svg-icons"


export default function WriteUsPage() {
    const [formData, setFormData] = useState({})
    const [formFilled, setFormFilled] = useState(false)

    const sendMessage = (e: any) => {
        e.preventDefault()
        console.log("Congratulations!")
        setFormFilled(false)
    }

    const checkForm = (kee: string) => (e: any) => {
        setFormData((curr) => {return {...curr, [kee]: e.target.value}})
        if (Object.getOwnPropertyNames(formData).length == 4) {
            setFormFilled(true)
        }
    }

    return (
        <div className="contacts">
            <h2>Get in Touch</h2>
            <div className="contact-info">
                <form>
                    <h3>Write Us</h3>
                    <input type="text" name="fullname" id="fullname"
                        placeholder="Full Name" required onChange={checkForm('fullname')} />
                    <input type="email" name="email" id="email"
                        placeholder="Email" required onChange={checkForm('email')} />
                    <input type="tel" name="tel" id="tel" placeholder="tel: XXX-XXXXXX" pattern="[0-9]{3}-[0-9]{6}"  required onChange={checkForm('tel')} />
                    <textarea name="msg" id="msg" cols={30} rows={10}
                        placeholder="Your Message Here..." onChange={checkForm('msg')}></textarea>
                    <button type="submit" disabled={!formFilled} onClick={sendMessage}>Send</button>
                </form>
                <div className="details">
                    <h3>Contact Us</h3>

                        <div className="contact-items">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <p><strong>Address:</strong> Ala-Too International
                                University, Ankara Street 1/8, Tunguch, 720048,
                                Bishkek, Kyrgyz Republic</p>
                        </div>
                        <div className="contact-items">
                            <FontAwesomeIcon icon={faPhone} />
                            <p><strong>Phone:</strong> +996 (312) 631425</p>
                        </div>
                        <div className="contact-items">
                            <FontAwesomeIcon icon={faAt} />
                            <p><strong>Email: </strong><a href="#">
                                        info@alatoo.edu.kg</a> </p>
                        </div>
                        <div className="contact-items">
                            <FontAwesomeIcon icon={faEarthAsia} />
                            <p><strong>Website: </strong><a href="#">
                                        www.thebestsiteintheworld.com</a></p>
                        </div>


                </div>

            </div>

        </div>
    )
}