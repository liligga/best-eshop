import delivery from '@/images/delivery.png'
import returnPic from '@/images/return.png'
import gifts from '@/images/gifts.png'
import payment from '@/images/payment.png'

function AboutUs() {
    return (
        <>
            <section className="about" id="about">
                <h1 className="heading"><span> About </span> us</h1>

                <div className="row">
                    <div className="content">
                    <h3>why choose us?</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                        labore expedita vel eveniet. Adipisci vel, expedita quaerat delectus
                        similique consequatur tempora ratione soluta laborum accusamus
                        reprehenderit dolorum obcaecati labore cumque.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                        quibusdam, accusantium perferendis repellendus reiciendis non
                        recusandae! Ea atque, incidunt rerum quaerat error impedit omnis
                        molestias aliquid. Omnis alias aliquam nulla.
                    </p>
                    <a href="#" className="btn">learn more</a>
                    </div>
                </div>
            </section>

        
            <section className="icons">
                <div className="icon">
                    <img src={delivery.src} alt="" />
                    <div className="info">
                    <h3>free delivery</h3>
                    <span>on all orders</span>
                    </div>
                </div>

                <div className="icon">
                    <img src={returnPic.src} alt="" />
                    <div className="info">
                    <h3>10 days return</h3>
                    <span>moneyback garantree</span>
                    </div>
                </div>

                <div className="icon">
                    <img src={gifts.src} alt="" />
                    <div className="info">
                    <h3>offers & gifts</h3>
                    <span>on all orders</span>
                    </div>
                </div>

                <div className="icon">
                    <img src={payment.src} alt="" />
                    <div className="info">
                    <h3>secure payment</h3>
                    <span>protected by paypal</span>
                    </div>
                </div>
            </section>


        </>
  
    )
}

export default AboutUs;