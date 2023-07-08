import PropTypes from 'prop-types';

import css from './feedback.module.css';

const Feedback = ({options, onLeaveFeedback}) => {
// const optionList = Object.keys(options);
// console.log(optionList);
    
    return (
        <div className={css.feedback}>
            <h1 className={css.main_title}>e<span>X</span>spresso cafe</h1>
            <h1 className={css.feedback_title}>Please leave your feedback</h1>

            <ul className={css.feedback_btns}>
                {options.map(option => (
                    <li className={css.good} key={option} >
                    <button name={option} onClick={() => onLeaveFeedback(option)}>{option}</button>
                </li>
                ))}
               
            </ul>
        </div>
    )
};

Feedback.propTypes = {
    options: PropTypes.objectOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired
};

export default Feedback;