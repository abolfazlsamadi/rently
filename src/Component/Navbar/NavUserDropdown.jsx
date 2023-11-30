import { UserCircleIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";

const ProfileDropdownNav = () => {
    const [showProfileDropdownNav, setShowProfileDropdownNav] = useState(false)
  return (
    <div className="profile-dropdown-nav">
      <div onClick={()=>{setShowProfileDropdownNav((current) => !current)}} className="profile-dropdown-nav__button">
        <Bars3Icon className=" Bars3Icon" />
        <UserCircleIcon className=" UserCircleIcon" />
      </div>
      {showProfileDropdownNav ? (
        <div className="profile-dropdown-nav__result">
            <div className="profile-dropdown-nav__result__register">
                <div className="profile-dropdown-nav__result__register__sign-up">
                    <p className="profile-dropdown-nav__result__register__sign-up__p">ثبت نام</p>
                </div>
                <div className="profile-dropdown-nav__result__register__sign-in">
                    <p className="profile-dropdown-nav__result__register__sign-in__p">ورود</p>
                </div>
            </div>
            <div className="profile-dropdown-nav__result__rent">
                <p className="profile-dropdown-nav__result__rent__p">فضای خالیتو اجاره بده!</p>
            </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProfileDropdownNav;
