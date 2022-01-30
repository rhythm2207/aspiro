import './category.css'
import CateCard from '../cate-cards/cate-cards'
import img1 from './cate1.svg'
import img2 from './cate2.svg'
import img3 from './cate3.svg'
import img4 from './cate4.svg'
import style from './style.png'


const Category = () => {
    return (
        <div className="cover">
            <div className="heading">
                CATEGORY
            </div>
            <div className="style"><img src={style} alt="" /></div>
            <div className="line">We Offer Best Services</div>
            <div className="cards">
                <CateCard image={img1} name="Calculated Weather" para="Built Wicket longer admire do barton vanity itself do in it." >
                </CateCard>
                <CateCard image={img2} name="Best Flights" para="Engrossed listening. Park gate sell they west hard for the." >
                </CateCard>
                <CateCard image={img3} name="Local Events" para="Barton vanity itself do in it. Preferd to men it engrossed listening. " >
                </CateCard>
                <CateCard image={img4} name="Customization" para="We deliver outsourced aviation services for customers" >
                </CateCard>
            </div>
        </div >
    )
}

export default Category