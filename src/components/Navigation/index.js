import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import { useDispatch } from 'react-redux';
import { setModal } from '../../redux/actions/modals';

const Navigation = () => {
  const dispatch = useDispatch();

  return (
    <nav>
      <span className="menu-icon">
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          size="xl"
          fixedWidth
          inverse
          onClick={() => dispatch(setModal(true, 'menu'))}
        />
      </span>

    </nav>
  );
};

export default Navigation;
