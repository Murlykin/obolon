import { ContD, ContP, ContImg, ContPBolt } from "./Contact.styled";
import logoC from "../../images/tt.jpg";
export const Сontact = () => {
    return (
        <ContD>
            <ContP>Для запису на тренування юнаків 2013, 2014, 2015 та 2016 р.н. у складі <ContPBolt>ДЮСШ ФК “Оболонь”</ContPBolt> звертайтесь за телефонами:</ContP><br></br>
            <ContP> <ContPBolt>+380973280344</ContPBolt> - старший тренер <ContPBolt>Олексій Карпук</ContPBolt> </ContP><br></br>
            <ContP> <ContPBolt>+380974311115</ContPBolt> - тренер <ContPBolt>Костянтин Коваленко </ContPBolt></ContP><br></br><br></br>
            <ContP>З приводу запису до СДЮСШ “Зміна-Оболонь” юнаків 2006, 2007, 2008, 2009, 2010, 2011 та 2012 р.н. звертайтесь за телефоном:</ContP>
            <br></br><ContP> <ContPBolt>+380987477497</ContPBolt> - керівник програми розвитку дитячо-юнацького футболу <ContPBolt>Олександр Павлюк</ContPBolt></ContP>
            
            <ContImg src={logoC} alt="Logo" />
        </ContD>
    );
};