import myAvatar from "../../../images/myAvatar.jpg";

const Profile = () => {
    return (
        <div id="myProfile" className="profile">
                    <a href="#home">
                        <img src={myAvatar} alt="" className="profileImage hover"/>
                    </a>
                    <h2 className="profileName">Vũ Thắng</h2>
                    <p className="profileSologan">"Design Your Life..."</p>
                </div>
    )
}
export default Profile