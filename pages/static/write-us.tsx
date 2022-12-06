import styles from '../../styles/Home.module.css'
import { useState } from 'react'
import Link from 'next/link'


export default function WriteUsPage() {
    const [formIsSent, setFormIsSent] = useState(false)

    const sendMessage = (e: any) => {
        e.preventDefault()
        console.log(document.forms[0])
        setFormIsSent(true)
    }

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {formIsSent ? 
                    <>
                        <p>Спасибо за ваше сообщение. Наши менеджеры свяжутся с Вами в ближайшее время</p>
                        <Link href="/">На главную</Link><a href="#" onClick={(e:any) => setFormIsSent(false)}>Написать еще раз</a>
                    </> :
                    <>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ipsum optio voluptates. Dicta error eaque vel hic eveniet nihil quidem facere exercitationem officia culpa non omnis ipsum tempora, quam nostrum!</p>
                        <form action="">
                            <input type="text" name="full-name" placeholder="Ваше имя"/>
                            <input type="email" name="email" placeholder="Ваш адрес электронной почты" />
                            <button type="submit" onClick={sendMessage}>Отправить</button>
                        </form>
                    
                    </>
                }
            </main>
        </div>
    )
}