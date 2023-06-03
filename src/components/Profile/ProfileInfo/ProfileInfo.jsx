
import classes from './ProfileInfo.module.css'
const ProfileInfo = (props) => {
    return (
        <div>

            <div className={classes.img}>
                <img src='https://i.artfile.ru/2880x1800_830528_[www.ArtFile.ru].jpg'/>
            </div>
            <div className={classes.descriptionblock}>
                ava + description

            </div>

        </div>)
}
export default ProfileInfo;
