import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './style.scss';
import icon from '../../../assets/images/iconcandy.png';

import Socials from '../../Socials';

import { setModal } from '../../../redux/actions/modals';

const MobileMenu = () => {
  const { element } = useSelector((state) => state.modals);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (element !== 'menu') return null;

  return (
    <section className="menu-elem">
      <div className="menu-elem-img">
        <img src={icon} alt="Avatar" />
      </div>

      <div className="menu-elem-titles">
        <h2
          className="menu-elem-titles__link"
          onClick={() => {
            navigate('/');
            dispatch(setModal(false, 'none'));
          }}
        >
          Skills
        </h2>

        <h2
          className="menu-elem-titles__link"
          onClick={() => {
            navigate('/portfolio');
            dispatch(setModal(false, 'none'));
          }}
        >
          Portfolio
        </h2>

        <h2
          className="menu-elem-titles__link"
          onClick={() => {
            navigate('about');
            dispatch(setModal(false, 'none'));
          }}
        >
          About
        </h2>

        <h2
          className="menu-elem-titles__link"
          onClick={() => {
            dispatch(setModal(true, 'contact'));
          }}
        >
          Contact
        </h2>
      </div>

      <Socials />

    </section>
  );
};

export default MobileMenu;
