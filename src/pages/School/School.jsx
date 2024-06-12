// import BLogo from '../../images/BLogo.jpg';
import {  SchoolP, SchoolD,  TeamsContainer, TeamsHeder, TeamsText, TeamsSochmed,
    TeamsItem, TeamsLinks, TeamsSvg, TeamsDIrems, SchoolTeams, SchoolLegend, TeamsDLegend, SchoolImg, ScoolContImg, ContImg, SchoolPBolt } from './School.styled';
import Karpuk from "../../images/Karpuk.jpg";
import Kovalenko from "../../images/Kovalenko.jpg";
import Icon from '../../images/icons.svg';
import Shevchenko from "../../images/shevchenko.jpg";
import Shovkovskii from "../../images/shavkovskii.jpg";
import Sviderskii from "../../images/В’ячеслав Свідерський.jpg";
import Plastun from "../../images/plastun.jpg";
import Myakushko from "../../images/myakushko.jpg";
import C2013 from "../../images/2013.jpg";
import C2014 from "../../images/2014.jpg";
import C2015 from "../../images/2015.jpg";
import C2016 from "../../images/2016.jpg";
import logoC from "../../images/tt.jpg";

export const School = () => {
    return (
        <SchoolD>< SchoolP><SchoolPBolt>ФК “Оболонь”</SchoolPBolt> пишається своєю довгою історією виховання юнаків для першої команди клубу, професійного футболу загалом і багатьох інших сфер спорту та життя. 
            Ось лише кілька імен футболістів, які розпочинали кар’єру на Оболоні: 
                <SchoolLegend>
                    <TeamsDLegend>
                        <img src={Shevchenko} alt="Shevchenko" />
                        <TeamsContainer>
                            <TeamsHeder>Андрій Шевченко</TeamsHeder>                           
                        </TeamsContainer>
                    </TeamsDLegend>
                    <TeamsDLegend>
                        <img src={Shovkovskii} alt="Chevchenko" />
                        <TeamsContainer>
                            <TeamsHeder>Олександр Шовковський</TeamsHeder>                           
                        </TeamsContainer>
                    </TeamsDLegend>
                    <TeamsDLegend>
                        <img src={Sviderskii} alt="Sviderskii" />
                        <TeamsContainer>
                            <TeamsHeder>В’ячеслав Свідерський</TeamsHeder>                           
                        </TeamsContainer>
                    </TeamsDLegend>
                    <TeamsDLegend>
                        <img src={Plastun} alt="Plastun" />
                        <TeamsContainer>
                            <TeamsHeder>Ігор Пластун</TeamsHeder>                           
                        </TeamsContainer>
                    </TeamsDLegend>
                    <TeamsDLegend>
                        <img src={Myakushko} alt="Myakushko" />
                        <TeamsContainer>
                            <TeamsHeder>Сергій Мякушко</TeamsHeder>                           
                        </TeamsContainer>
                    </TeamsDLegend>
                </SchoolLegend>
            <SchoolP>З 2020 року <SchoolPBolt>ФК “Оболонь”</SchoolPBolt> відкрив нову сторінку в історії розвитку дитячо-юнацького футболу району. На базі футбольного клубу була створена власна ДЮСШ ФК “Оболонь”.
                <br></br> На сьогодні склад <SchoolPBolt>ДЮСШ ФК “Оболонь”</SchoolPBolt> нараховує академічні групи для гравців <SchoolPBolt>2013</SchoolPBolt>, <SchoolPBolt>2014</SchoolPBolt>, <SchoolPBolt>2015</SchoolPBolt> та <SchoolPBolt>2016</SchoolPBolt> р.н.</SchoolP>
                <ScoolContImg>
                    <SchoolImg src={C2013} alt="2013" />
                    <SchoolImg src={C2014} alt="2014" />
                    <SchoolImg src={C2015} alt="2015" />
                    <SchoolImg src={C2016} alt="2016" />     
                </ScoolContImg> 
 
<SchoolTeams>
                    <TeamsDIrems>
                        <img src={Karpuk} alt="oleksei-karpuk" />
                        <TeamsContainer>
                            <TeamsHeder>Олексій Карпук</TeamsHeder>
                            <TeamsText lang="en">Старший тренер</TeamsText>
                            <TeamsSochmed >
                                <TeamsItem>
                                    <TeamsLinks>
                                        <TeamsSvg aria-label="іконка інстаграм" width="20" height="20">
                                            <use href={Icon + '#icon-instagram'}></use>
                                        </TeamsSvg>
                                    </TeamsLinks>
                                </TeamsItem>
                                <TeamsItem>
                                    <TeamsLinks>
                                        <TeamsSvg aria-label="іконка твітер" class="icones" width="20" height="20">
                                            <use href={Icon + '#icon-tviter'}></use>
                                        </TeamsSvg>
                                    </TeamsLinks>
                                </TeamsItem>
                                <TeamsItem>
                                    <TeamsLinks>
                                        <TeamsSvg aria-label="іконка феїсбук" class="icones" width="20" height="20">
                                            <use href={Icon + '#icon-facebook'}></use>
                                        </TeamsSvg>
                                    </TeamsLinks>
                                </TeamsItem>
                                <TeamsItem>
                                    <TeamsLinks>
                                        <TeamsSvg aria-label="іконка линкедін" class="icones" width="20" height="20">
                                            <use href={Icon + '#icon-linkedin'}></use>
                                        </TeamsSvg>
                                    </TeamsLinks>
                                </TeamsItem>
                            </TeamsSochmed >
                        </TeamsContainer>
                    </TeamsDIrems>

                    <TeamsDIrems>
                        <img src={Kovalenko} alt="kosnantin-kovalenko" />
                        <TeamsContainer>
                            <TeamsHeder>Костянтин Коваленко</TeamsHeder>
                            <TeamsText lang="en">Тренер</TeamsText>
                            <TeamsSochmed >
                                <TeamsItem>
                                    <TeamsLinks>
                                        <TeamsSvg aria-label="іконка інстаграм" width="20" height="20">
                                            <use href={Icon + '#icon-instagram'}></use>
                                        </TeamsSvg>
                                    </TeamsLinks>
                                </TeamsItem>
                                <TeamsItem>
                                    <TeamsLinks>
                                        <TeamsSvg aria-label="іконка твітер" class="icones" width="20" height="20">
                                            <use href={Icon + '#icon-tviter'}></use>
                                        </TeamsSvg>
                                    </TeamsLinks>
                                </TeamsItem>
                                <TeamsItem>
                                    <TeamsLinks>
                                        <TeamsSvg aria-label="іконка феїсбук" class="icones" width="20" height="20">
                                            <use href={Icon + '#icon-facebook'}></use>
                                        </TeamsSvg>
                                    </TeamsLinks>
                                </TeamsItem>
                                <TeamsItem>
                                    <TeamsLinks>
                                        <TeamsSvg aria-label="іконка линкедін" class="icones" width="20" height="20">
                                            <use href={Icon + '#icon-linkedin'}></use>
                                        </TeamsSvg>
                                    </TeamsLinks>
                                </TeamsItem>
                            </TeamsSochmed >
                        </TeamsContainer>
                    </TeamsDIrems>
            </SchoolTeams>
            
            <ContImg src={logoC} alt="Logo" />
</ SchoolP></SchoolD>
);
};
