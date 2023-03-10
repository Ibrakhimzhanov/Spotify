import { useEffect, useRef } from "react";
import PlaylistContextMenuItem from "./PlaylistContextMenuItem";

function PlaylistContextMenu({ classes, menuItems, onClose: handleClose }) {
  const menuRef = useRef(null);

  useEffect(() => {
    if (!handleClose) return;

    function handleClickAway(event) {
      if (!menuRef.current.contains(event.target)) {
        handleClose();
      }
    }

    function handleEsc(event) {
      if (event.keyCode === 27) {
        handleClose();
      }
    }

    document.addEventListener("mousedown", handleClickAway);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
      document.removeEventListener("keydown", handleEsc);
    };
  });

  return (
    <ul className={classes} ref={menuRef}>
      {menuItems.map(({ label, subMenuItems }) => (
        <PlaylistContextMenuItem key={label} subMenuItems={subMenuItems}>
          {label}
        </PlaylistContextMenuItem>
      ))}
    </ul>
  );
}

export default PlaylistContextMenu;
