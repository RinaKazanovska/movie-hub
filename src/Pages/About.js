import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import './About.css';
function About() {
    return (
        <Container>
            <h1 className="team">Our team</h1>
            <div className="dciLogo">
            <img src="https://cdn.join.com/5e32e16223847f000181564c/dci-digital-career-institute-logo-xl.png"
                    alt="" className="rounded-circle shadow-lg" style={{width: "160px", height: "160px"}}/>
           <h2 className="dci">Digital Career Institute</h2> 
           </div>
            <p className='aboutDci' >The Digital Career Institute was born as an initiative to integrate refugees into digital jobs. Today it is committed to train anyone who wants to pursue a tech career.
            <br />
            <b>Passion:  </b>
            We're driven by a passionate belief in the work we do. This passion can be found in our classrooms, our office and in the work of our students. We're proud to have created a buzzing environment driven by a sense of purpose and dedication.</p>
            <Row>
            <Col className="col-lg-4 col-md-4 col-12">
            <div className="picstyle"> 
                <img src="https://ca.slack-edge.com/T01E6N9JBNJ-U01ENT6MCN8-d696b978b1fd-512"
                    alt="" className="rounded-circle shadow-lg" style={{width: "130px", height: "130px"}}/>
                <h3>Julia</h3>
                </div>
                <p>My name is Julia Lein. I am from St. Petersburg, Russia. I've been living in Germany for about 3 years, first in Dresden and now in Hamburg. I studied computer science at University and later worked as a content manager for many years. But  I've always been driven by the field of Internet technology and therefore I decided to study Web Development to become a good specialist in this field.
                </p>
                <p className="buttonstyle">
                    <a href="https://github.com/julia-lein" className="btn btn-secondary">View on <i className="bi bi-github"></i></a>
                </p>
            </Col>
            <Col className="col-lg-4 col-md-4 col-12">
            <div className="picstyle"> 
                <img src="https://avatars.githubusercontent.com/u/61105054?s=460&u=ec381e4cbe2eeca41795cad9cba3d08a8b1af891&v=4"
                    alt="" className="rounded-circle shadow-lg" style={{width: "130px", height: "130px"}}/>
                <h3>Yasir</h3>
                </div>
                <p>Hi there, I'm Yahya Yasir from Turkey and I've been living in Germany since 2018.  I've been attending a Web Development course at DCI since September. After finishing my education I would like to continue my career in this field and apply the challenging and exciting process to my business life and personal IT development.
                </p>
                <p className="buttonstyle">
                    <a href="https://github.com/yykoca" className="btn btn-secondary">View on <i className="bi bi-github"></i></a>
                </p>
            </Col>
            <Col className="col-lg-4 col-md-4 col-12">
            <div className="picstyle"> 
                <img src="https://ca.slack-edge.com/T01E6N9JBNJ-U01E6PQD0KY-02d50e891023-512"
                    alt="" className="rounded-circle shadow-lg" style={{width: "130px", height: "130px"}}/>
                <h3>Rigina</h3>
                </div>
                <p>Hi, I'm Rigina. I moved from Kyrgyzstan to Germany three years ago. In my country I studied logistics, but during the corona crisis I started being interested in the IT field. In September 2020 I started studying at DCI. And since then  I've been learning something new every day.
                </p>
                <p className="buttonstyle">
                    <a href="https://github.com/Riginana" className="btn btn-secondary">View on <i className="bi bi-github"></i></a>
                </p>
            </Col>
            </Row>
            <Row>
            <Col className="col-lg-6 col-md-6 col-12">
                <div className="picstyle"> 
                     <img src="https://ca.slack-edge.com/T01E6N9JBNJ-U01DYPF8Y3H-31d7e4c1bce2-512"
                alt="" className="rounded-circle shadow-lg" style={{width: "130px", height: "130px"}} />
                <h3>Katerina</h3>
                </div>
                <p>Hey, my name is Katerina Kazanovska and  I've been living in Germany since 2017. Holding a master's degree in Physics and being originally from Ukraine,  I've worked there as an IT Business Analyst. Self improvement and development, knowledge structuring and optimizing is my passion, therefore I came up with the idea to go deeper and learn Web Development to become more professional in IT. I like to break stereotypes and strongly believe that women can bring the new spirit and ideas in the tech industry.  
                </p>
                <p className="buttonstyle">
                <a href="https://github.com/RinaKazanovska" className="btn btn-secondary">View on <i className="bi bi-github"></i></a>
                </p>
            </Col>
            <Col className="col-lg-6 col-md-6 col-12">
                <div className="picstyle"> 
                <img src="https://avatars.githubusercontent.com/u/72547097?s=460&u=5e9d06cbf9dd62f0606f598d74ec7c839f8c0068&v=4"
                    alt="" className="rounded-circle shadow-lg" style={{width: "130px", height: "130px"}}/>
                <h3>Christian</h3>
                </div>
                <p>Hello, my name is Christian, I'm Colombian and I've been living in Germany since 2015. I am an economist with focus in sociology and have worked in many different fields, mainly in education and customer service. I'm a technology lover with influence in the economy, society and believe blindly in the power of communication and information. I'm initially interested in database and process management and always see the criticism as an opportunity for improvement.
                </p>
                <p className="buttonstyle">
                    <a href="https://github.com/capsgit" className="btn btn-secondary">View on <i className="bi bi-github"></i></a>
                </p>
            </Col>
            </Row>
        </Container>
    )
}
export default About