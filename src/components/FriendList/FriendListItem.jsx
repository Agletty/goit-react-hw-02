import clsx from "clsx";
import css from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = clsx(css.status, {
    [css.active]: isOnline,
    [css.offline]: !isOnline,
  });

  return (
    <div>
      <img className={css.avatar} src={avatar} alt="Avatar" width="120" />
      <p className={css.name}>{name}</p>
      <p className={statusClass}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;
