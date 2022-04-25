import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import { useDispatch } from 'react-redux';
import { setModal } from '../../../redux/actions/modals';

const ModalHeader = () => {
  const dispatch = useDispatch();

  return (
    <div className="modal-header">
      <span className="modal-header__arrow">
        <FontAwesomeIcon
          icon={faAngleLeft}
          size="xl"
          fixedWidth
          onClick={() => dispatch(setModal(false, 'none'))}
        />
      </span>
    </div>
  );
}
export default ModalHeader;
