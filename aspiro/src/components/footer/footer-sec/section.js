import './section.css'

const Section = ({ company, l1, l2, l3 }) => {
    return (
        <div className="section">
            <div className="compname">
                {company}
            </div>
            <div className="l">{l1}</div>
            <div className="l">{l2}</div>
            <div className="l">{l3}</div>
        </div>
    )
}

export default Section