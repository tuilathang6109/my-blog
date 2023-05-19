import myAvatar from "../../../images/myAvatar.jpg";

const Profile = () => {
    return (
        <div id="myProfile" className="profile">
                    <img src={myAvatar} alt="" className="profileImage hover"/>
                    <h2 className="profileName">Vũ Thắng</h2>
                    <p className="">"Design Your Life"</p>
                </div>
    )
}
export default Profile