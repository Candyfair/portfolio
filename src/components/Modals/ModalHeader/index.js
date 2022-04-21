import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

const ModalHeader = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="modal-header">
      <span className='modal-header__arrow'>
        <FontAwesomeIcon
          icon={faAngleLeft}
          size="xl"
          fixedWidth
          onClick={() => setShowMenu(false)}
        />
      </span>
    </div>
  );
}
export default ModalHeader;
