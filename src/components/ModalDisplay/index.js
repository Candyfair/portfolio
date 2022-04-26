import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../redux/actions/modals';

import ModalHeader from './ModalHeader';
import MobileMenu from './MobileMenu';
import Contact from './Contact';

const ModalDisplay = () => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.modals);

  if (!modal) return null;

  return (
    <div
      open={modal}
      onClose={() => dispatch(setModal(false, 'none'))}
    >
      <section className="menu">
        <ModalHeader />
        <MobileMenu />
        <Contact />

      </section>

    </div>
  );
};

export default ModalDisplay;
