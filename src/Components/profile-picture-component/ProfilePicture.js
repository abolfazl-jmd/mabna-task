import styles from "./ProfilePicture.module.css";

const ProfilePicture = () => {
  return (
    <div className={`${styles.profile}`}>
      <i className={`fa-regular fa-user ${styles.profile__icon}`}></i>
      <span className={`${styles.add_photo_icon}`}>
        <i className="fa-regular fa-square-plus"></i>
      </span>
    </div>
  );
};

export default ProfilePicture;
