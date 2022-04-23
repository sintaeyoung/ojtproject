import React from 'react';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import subimage1 from './img/sub1.jpg';
import subimage2 from './img/sub2.jpg';
import subimage3 from './img/sub3.jpg';



export default function Ieditmain(){
        return(
            <>
                <div id="wrapper">
                        <section className="mainViews">
                                <div className='mainView-title'>
                                        <p>
                                                Changed ImageEditor
                                        </p>
                                </div>
                                <div className='mainView-btn'>

                                </div>

                        </section>
                        <div className="subViews">
                                <div className="subContents-box">
                                        <div className="subContents">
                                                <Image thumbnail src={subimage1} alt='subcontent1' width="300px" height="200px"/>
                                                <p>subContents1</p>
                                        </div>
                                        <div className="subContents">
                                                <Image thumbnail src={subimage2} alt='subcontent2' width="300px" height="200px"/>
                                                <p>subContents2</p>
                                        </div>
                                        <div className="subContents">
                                                <Image thumbnail src={subimage3} alt='subcontent3' width="300px" height="200px"/>
                                                <p>subContents3</p>
                                        </div>
                                </div>
                        </div>
                        <footer>

                                123456
                        </footer>
                </div>
            </>
        );
}