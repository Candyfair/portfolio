import { useSelector } from 'react-redux';

import './style.scss';

const Contact = () => {
  const { element } = useSelector((state) => state.modals);

  if (element !== 'contact') return null;

  return (
    <div>
      Contact
    </div>
  );
};

export default Contact;
