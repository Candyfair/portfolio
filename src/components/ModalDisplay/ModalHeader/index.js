import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faXmark } from '@fortawesome/free-solid-svg-icons';

import { useDispatch } from 'react-redux';
import { setModal } from '../../../redux/actions/modals';

const ModalHeader = () => {
  const dispatch = useDispatch();

  return (
    <div className="modal-header">
      <span className="modal-header__arrow">
        <div className="mobile-menu-show">
          <FontAwesomeIcon
            icon={faAngleLeft}
            size="xl"
            fixedWidth
            onClick={() => dispatch(setModal(false, 'none'))}
          />
        </div>
        <div className="desktop-menu-show">
          <FontAwesomeIcon
            icon={faXmark}
            size="xl"
            fixedWidth
            onClick={() => dispatch(setModal(false, 'none'))}
          />
        </div>
      </span>
    </div>
  );
};

export default ModalHeader;
