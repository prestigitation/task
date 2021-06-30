import './dep_history.css'
import {useState} from 'react'
import showmore from './department_history_showmore.svg'
import React from "react";
import "./index.css";
import images from "./assets/image";
import BorderSVG from "./pages/components/gloabal/UI/SVGComponents/BorderSVG";
import BurgerSVGbg from "./pages/components/gloabal/UI/SVGComponents/BurgerSVGbg";

const DepartmentHistory = () => {
    function showMore() {
        setDepartmentFullText(!department_fulltext)
    }
    const [department_fulltext, setDepartmentFullText] = useState(false); // по умолчанию кнопка 'читать дальше не активирована',имеем неполный текст
    return (
        <div className="dep_history_block">
            <div className="dep_history_description">
                <div className="dep_history_header">
                    История кафедры
                </div>
                <div className="dep_history_content">
                    <div className={department_fulltext ? 'dep_history_fulltext' : 'dep_history_partialtext'}>
                        <p>
                            Кафедра «Информатика и программная инженерия» сформирована в 2015 году в рамках реорганизации кафедры «Физика, математика и информатика», успешно функционировавшей с 1994 года, со дня образования инженерно-педагогического факультета ПГУ им. Т.Г. Шевченко в городе Рыбнице. В настоящий момент кафедра обеспечивает преподавание естественнонаучных и специальных дисциплин. За время своей работы кафедра подготовила более 400 специалистов в области программной инженерии и педагогического образования (информатики).
                        </p>
                        <p>
                            C начала своей деятельности коллектив кафедры ориентировался на спрос потребителей: год от года совершенствовались педагогические технологии, появлялись новые специальности 
                        </p>
                    </div>
                    <div className='dep_history_showmore' onClick={showMore}>
                        {
                        department_fulltext 
                        ? 
                        <span className='dep_history_showmore_text'>
                            Свернуть
                        </span> 
                        : 
                        <span className='dep_history_showmore_text'>
                            Читать полностью
                        </span>
                        }
                        <img src={showmore} className={department_fulltext?'dep_history_showmore_rotate' : ''}/>
                    </div>
                </div>
            </div>
            <div className="department-history-wrapper-la">
                <div className="department-history-wrapper-image-la">
                    <BurgerSVGbg className={"burger-back"}/>
                    <BorderSVG className={"border-back"}/>
                    <div className={"department-history-image-la"}>
                        <img src={images.tyagulska} alt="images.tyagulska"/>
                    </div>
                </div>
                <div className="department-history-wrapper-info-la">
                    <div className={"info-la-lastName"}>Тягульская</div>
                    <div className={"info-la-name-secondName"}>Людмила Анатольевна</div>
                    <div className={"info-la-status"}>Заведующий кафедрой, кандидат экономических наук,
                        доцент
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DepartmentHistory