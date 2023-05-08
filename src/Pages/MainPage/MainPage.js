import React from 'react';
import './MainPage.css'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import BunnerIMG from '../../assets/Images/BunnerIMG.png'
import BunnerLogo from '../../assets/Images/BunnerLogo.png'
import BunnerIMG2nd from '../../assets/Images/BunnerIMG2nd.png'
import FIrstBunnerIllustartion from '../../assets/Images/FIrstBunnerIllustartion.png'
import SecondBunnerIllustartion from '../../assets/Images/SecondBunnerIllustartion.png'
import Phone2ndCont from '../../assets/Images/Phone2ndCont.png'
import Illustration2ndCont from '../../assets/Images/Illustration2ndCont.png'
import IllustrationforPlutform from '../../assets/Images/IllustrationforPlutform.png'
import FirstIllustration3rdContainer from '../../assets/Images/FirstIllustration3rdContainer.png'
import Phone3rdCont from '../../assets/Images/Phone3rdCont.png'
import PhoneFor3rdCont from '../../assets/Images/PhoneFor3rdCont.png'
import IllustrationFor3rdCont from '../../assets/Images/IllustrationFor3rdCont.png'
import PhoneFor4thCont from '../../assets/Images/PhoneFor4thCont.png.png'
import IllustrationFor4thCont from '../../assets/Images/IllustrationFor4thCont.png'
import Illustration2nd5thCont from '../../assets/Images/Illustration2nd5thCont.png'
import IllustrationFor5thCont from '../../assets/Images/IllustrationFor5thCont.png'
import PhoneFor5thCont from '../../assets/Images/PhoneFor5thCont.png'
import Apply from '../../assets/icons/Apply.png'

const MainPage = () => {
    return (
        <div>
            <Header/>
            <section className="Banner">
            <div className="BunnerBackground">
                <div className='Item FirstIllustration'> <img src={BunnerIMG2nd}/></div>
                <div className='Item Headline'> 
                <h3>Your connection</h3>
                <h2>to your everyday</h2>
                <h1>health</h1>
                <img src={BunnerLogo} alt="" />
                </div>
                <div className='Item SecondIllustration' > <img src={BunnerIMG}/></div>
            </div>
            <div className="Plutform"> <img src={FIrstBunnerIllustartion} alt="" /><img src={SecondBunnerIllustartion} alt="" />  </div>
            </section>
            <section className="SecondContainer">
            <div className='ConteinerWith2Items'>
                <div className="Item2nd Item2nd-1 ">
                    <div className="Beground2ndConteiner">
                        <img src={Phone2ndCont} alt="" />
                    </div>
                </div>
                <div className="Item2nd Item2nd-2 ">
                <span>
                 <h2>In sickness and in <br/>health</h2>
                 <br />
                 <p>Whether you have a little scratch, something you’re worried about, an ambitious health goal or you just want to stay healthy, your care team is here every day.</p>
                </span>
                </div>
            </div>
                <div className="Item2nd Item2nd-3 ">
                    <img src={Illustration2ndCont} alt="" />
                    <img src={IllustrationforPlutform} alt="" />
                </div>
            </section>
            <section className='ThierdConteiner'>
            <div className="ThierdrdWith2Items">
                <div className='Item3rd ThierdItem-2'>
                <span>
                 <h2>A special <br /> relationship</h2>
                 <br />
                 <br />
                 <p>Composed of doctors and health specialists, your care team will partner with you to create a tailored plan based on medical care, nutrition, exercise and stress.</p>
                </span>
                </div>
                <div className='Item3rd ThierdItem-3'>
                    <div className="Conteiner3rdPhoneBG"> <img src={Phone3rdCont} alt="" />  </div>
                </div>
            </div>
            <div className="ThierdContainerPluform">
                <img src={BunnerIMG2nd} alt="" />
                <img src={FirstIllustration3rdContainer} alt="" />
            </div>
            </section>
            <section className="SecondContainer">
            <div className='ConteinerWith2Items'>
                <div className="Item2nd Item2nd-1 ">
                    <div className="Beground2ndConteiner">
                        <img src={PhoneFor3rdCont} alt="" />
                    </div>
                </div>
                <div className="Item2nd Item2nd-2 ">
                <span>
                 <h2>Always available, <br /> in your pocket</h2>
                 <br />
                 <p>Connect with your care team anytime remotely by message or video call and schedule in-person consultations. 
                  <br/><br/><br/> Have a question? Just text.</p>
                </span>
                </div>
            </div>
                <div className="Item2nd Item2nd-3 ">
                    <img src={IllustrationFor3rdCont} alt="" />
                    <img src={IllustrationforPlutform} alt="" />
                </div>
            </section>
            <section className='ThierdConteiner'>
            <div className="ThierdrdWith2Items">
                <div className='Item3rd ThierdItem-2'>
                <span>
                 <h2>A special <br /> relationship</h2>
                 <br />
                 <br />
                 <p>Composed of doctors and health specialists, your care team will partner with you to create a tailored plan based on medical care, nutrition, exercise and stress.</p>
                </span>
                </div>
                <div className='Item3rd ThierdItem-3'>
                    <div className="Conteiner3rdPhoneBG"> <img src={PhoneFor4thCont} alt="" />  </div>
                </div>
            </div>
            <div className="ThierdContainerPluform">
                <img className='ErroeHappend'src={BunnerIMG2nd} alt="" />
                <img className='ErroeHappend' src={IllustrationFor4thCont} alt="" />
            </div>
            </section>
            <section className="SecondContainer">
            <div className='ConteinerWith2Items'>
                <div className="Item2nd Item2nd-1 ">
                    <div className="Beground2ndConteiner">
                        <img src={PhoneFor5thCont} alt="" />
                    </div>
                </div>
                <div className="Item2nd Item2nd-2 ">
                <span>
                 <h2>Toward precision <br /> health</h2>
                 <br /> <br />
                 <p>The combination of biological, genetic, phenotypic and environmental data together with AI will unlock our ability to predict, prevent and cure disease more precisely, empowering people to lead healthier lives.</p>
                 <br /> <br />
                <button className='Cont5thBuuton'>Get early access</button>
                </span>
                </div>
            </div>
                <div className="Item2nd Item2nd-3 ">
                    <img src={Illustration2nd5thCont} alt="" />
                    <img src={IllustrationFor5thCont} alt="" />
                </div>
            </section>

            <section className='NewsletterSection'>
                <div className="NewLetters">
                <img src={Apply} alt="" className="Apply" />
                    <div className='IllustrationBlock'>
                        <img src={BunnerIMG2nd} alt="" />
                        <img src={FIrstBunnerIllustartion} alt="" />
                    </div>
                    <div className='NewLettersBlock'>
                        <span>
                            <h2>Newsletter</h2>
                            <p>Get the latest news from Nabla on health and artificial intelligence, straight to your inbox.</p>
                            <input type="text" placeholder='Enter your email adress'/> <button>Submit</button>
                            <p>Nabla uses your email address to send you the newsletter. <a>More info</a></p> 
                        </span>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default MainPage;
