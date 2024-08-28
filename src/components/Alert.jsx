import PropTypes from 'prop-types';

const Alert = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div
      className="fixed top-12 align-middle p-4 mb-4 text-sm rounded-lg bg-lightPeach text-brown"
      role="alert"
    >
      <span className="font-medium">Success alert!</span> {message}
      <button
        className="ml-4 font-bold text-brown"
        onClick={onClose}
      >
        X
      </button>
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default Alert;
