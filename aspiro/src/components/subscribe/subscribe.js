import './subscribe.css'
import Button from '../button/button'
import style from './style.png'
import send from './send.png'

const Subscribe = () => {
    return (
        <div className="container">
            <div className="send"><img src={send} alt="" /></div>
            <div className="detail">Subscribe to get information, latest news and other
                interesting offers about Cobham
            </div>
            <div className="input">
                <input type="text" className='space' placeholder="Your Email" />
                <div>
                    <Button name="Subscribe" color="#FF946D" classname='bt'></Button>
                </div>
            </div>
            <div className="style">
                <img src={style} alt="" /></div>
        </div>
    )
}

export default Subscribe