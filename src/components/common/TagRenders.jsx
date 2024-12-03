import { RxCross2 } from "react-icons/rx";
import '../../style/TagRenderer.css';
const TagRenders = ({selectedOptions,onChange}) => {
    return (
        <div className="tag-container">
            {selectedOptions.map((option) => (
                <div key={option} className="tag-item">
                    <div className="tag-text">{option}</div>
                    <div className="tag-remove" onClick={() => onChange(option)}><RxCross2 /></div>
                </div>
            ))}
        </div>
    )
}

export default TagRenders;