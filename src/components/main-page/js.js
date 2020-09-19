import React from 'react';
import image from '../../assets/img/main-page.jpg';
import './style.css';
const MainPage = () => {
    return (
        <div>
            <img src={image} alt="main img"/>
            <div className="text">
                <h3>
                    Sunt est labore fugiat cillum officia non ea enim quis consequat labore. 
                    Pariatur officia duis enim voluptate. Quis duis adipisicing laborum enim.
                    Deserunt labore dolor pariatur eu aute eiusmod sint cillum adipisicing est proident do. 
                    Amet non fugiat officia laborum Lorem cillum occaecat velit nulla in fugiat est. 
                    Occaecat proident incididunt velit enim quis pariatur proident commodo exercitation. 
                    Qui id Lorem aute irure est eu ut sint fugiat.
                </h3>
            </div>
        </div>
    )
}
export default MainPage;