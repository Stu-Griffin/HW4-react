import React, {Component} from 'react';
import Contact from './contact-rendering/contact.js';
import maleGender from '../../../assets/img/for-contacts/gender-man.svg';
import femaleGender from '../../../assets/img/for-contacts/gender-woman.svg';
import anonimGender from '../../../assets/img/for-contacts/gender-anonim.svg';
const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}];
class Contracts extends Component {
    state = {
        data: [...contacts],//копируем наши данные
        inputValue: "",//то чудо что прийдет из инпута
    }
    changeGender(gender) {
        if(gender === 'male') {
            return maleGender
        } else if(gender === 'female') {
            return femaleGender
        } else {
            return anonimGender
        }
    }
    ChangeInputValue = (event) => {
        this.setState({
            inputValue: event.target.value//добавим то что прийдет из инпута в inputValue
        })
        this.setState({
           data: [...contacts.filter(el => { //сделаем проверку + filter самый лучший выбор 
               return (
                el.lastName.toLowerCase().includes(event.target.value.toLowerCase()) || //когда ставлю inputValue.toLowerCase() работает не так как надо
                el.firstName.toLowerCase().includes(event.target.value.toLowerCase()) || 
                el.phone.includes(event.target.value)
               )
           })] 
        })
    }
    render() {
        return(
            <section>
                <input className="input" placeholder="search" value={this.state.inputValue} onChange={this.ChangeInputValue}/>
                <div className="scrin">
                    {this.state.data.map((el, i) => {
                        return(
                            <Contact
                                key={i}
                                firstName={el.firstName}
                                gender={this.changeGender(el.gender)}
                                phone={el.phone}
                                lastName={el.lastName}
                            /> 
                        )     
                    })}
                </div>
            </section>
        )
    }
}
export default Contracts