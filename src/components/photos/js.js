import React from 'react';
import './style.css';
import firstImg from '../../assets/img/for-photos-page/first.jpg';
import secondImg from '../../assets/img/for-photos-page/second.jpg';
import thirdImg from '../../assets/img/for-photos-page/third.jpg';
import fourthImg from '../../assets/img/for-photos-page/fourth.jpg';
const PhotosPage = () => {
    return (
        <div className="box-for-photos">
            <div className="box-photos">
                <img src={firstImg} alt="first"/>
                <div className="text">
                    <h3>
                        Minim velit incididunt dolore in elit consectetur dolore in qui voluptate ullamco. Proident exercitation cupidatat sint cupidatat do Lorem esse. 
                    </h3>
                </div>
            </div>
            <div className="box-photos">
                <img src={secondImg} alt="second"/>
                <div className="text">
                    <h3>
                        Minim velit incididunt dolore in elit consectetur dolore in qui voluptate ullamco. Proident exercitation cupidatat sint cupidatat do Lorem esse. 
                    </h3>
                </div>
            </div>
            <div className="box-photos">
                <img src={thirdImg} alt="third"/>
                <div className="text">
                    <h3>
                        Minim velit incididunt dolore in elit consectetur dolore in qui voluptate ullamco. Proident exercitation cupidatat sint cupidatat do Lorem esse. 
                    </h3>
                </div>
            </div>
            <div className="box-photos">
                <img src={fourthImg} alt="fourth"/>
                <div className="text">
                    <h3>
                        Minim velit incididunt dolore in elit consectetur dolore in qui voluptate ullamco. Proident exercitation cupidatat sint cupidatat do Lorem esse. 
                    </h3>
                </div>
            </div>
        </div>
    )
}
export default PhotosPage;