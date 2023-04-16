import PropTypes from 'prop-types';
import { Message } from "./style.jsx";

const Notification = ({message}) => {
    return (
        <Message>{message}</Message>
    )
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,   
}

export default Notification;