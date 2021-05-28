import './dep_history.css'
import {useState} from 'react'
import showmore from './department_history_showmore.svg'
import zavkaf from './zavkaf.svg'
import bgpart1 from './bgpart1.svg'
import bgpart2 from './bgpart2.svg'
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
            <div className="dep_history_logo">
                <div className="dep_history_images">
                    <img src={zavkaf} id="zavkaf"/> 
                    <img src={bgpart1} id='dep_history_bg1'/>
                    <img src={bgpart2} id='dep_history_bg2'/>
                </div>
                <div className="dep_history_logo_text">
                    <div className="dep_history_chief">
                        Тягульская
                    </div>
                    <div className="dep_history_chief_data">
                        Людмила Анатольевна
                    </div>
                    <div className="dep_history_chief_degree">
                        Заведующий кафедрой, кандидат экономических наук, доцент 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DepartmentHistory