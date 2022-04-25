import { useSelector } from 'react-redux';

import './style.scss';

const MobileMenu = () => {
  const { element } = useSelector((state) => state.modals);

  if (element !== 'menu') return null;

  return (
    <div>
      MobileMenu
    </div>
  );
};

export default MobileMenu;
