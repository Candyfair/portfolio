import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import MobileMenu from 'src/components/Modals/MobileMenu';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  let menu;
  let menuMask;

  if (showMenu) {
    menu = <MobileMenu />;
  }

  return (
    <nav>
      <span>
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          size="xl"
          fixedWidth
          inverse
          onClick={() => setShowMenu(!showMenu)}
        />
      </span>

      {menu}
    </nav>
  );
};

export default Navigation;
