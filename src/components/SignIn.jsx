import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { Carousel, Container, Card, Nav, Button } from 'react-bootstrap';
import andesLataRubia from './img/andesLataRubia.jpg'
import brahmaLata from './img/brahmaLata.jpg'
import budweiserLata from './img/budweiserLata.jpg'
import coronaLata from './img/coronaLata.jpg'
import patagoniaLataAmberLager from './img/patagoniaLataAmberLager.jpg'
import quilmesLataClasica from './img/quilmesLataClasica.jpg'
import stellaLataGrandeRubia from './img/stellaLataGrandeRubia.jpg'
import templeLataHoney from './img/templeLataHoney.jpg'

const SignIn = () => {

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then( result => {
            const user = result.user;
            console.log(user)
        })
        .catch( error => {
            console.log(error.message)
        })
    }

    return(
        <div style={{ marginTop:50, marginBottom:50, textAlign: "center" }}>
            <Container>
                <Card border="secondary">
                    <Card.Header style={{ backgroundColor: "#fff159" }}>
                        <Nav className="d-flex flex-md-row flex-column justify-content-around">
                            <div style={{marginTop:15, marginBottom:10}}><h3>Birrap!</h3></div>
                            <div style={{marginTop:15, marginBottom:10}}><Button style={{padding:10}} variant="secondary" className="sign-in" onClick={signInWithGoogle}>Iniciar sesión con Google</Button></div>
                            <div><img src={require('../components/img/vasos.jpg')} width="90" height="auto" class="img-fluid d-block mx-auto" style={{opacity:0.8}}></img></div>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <Carousel variant="dark">
                            <Carousel.Item>
                                <img src={andesLataRubia} style={{marginBottom:50}} width="400" height="auto"/>
                                <Carousel.Caption></Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={brahmaLata} style={{marginBottom:50}} width="400" height="auto"/>
                                <Carousel.Caption></Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={budweiserLata} style={{marginBottom:50}} width="400" height="auto"/>
                                <Carousel.Caption></Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={coronaLata} style={{marginBottom:50}} width="400" height="auto"/>
                                <Carousel.Caption></Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={patagoniaLataAmberLager} style={{marginBottom:50}} width="400" height="auto"/>
                                <Carousel.Caption></Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={quilmesLataClasica} style={{marginBottom:50}} width="400" height="auto"/>
                                <Carousel.Caption></Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={stellaLataGrandeRubia} style={{marginBottom:50}} width="400" height="auto"/>
                                <Carousel.Caption></Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={templeLataHoney} style={{marginBottom:50}} width="400" height="auto"/>
                                <Carousel.Caption></Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Card.Body>
                    <Card.Footer>
                        <p>Aquí encontrarás delivery de cervezas clásicas, premium y artesanales a precio de mercado.</p>
                        <p>Te invitamos a que recorras nuestra página web, hagas tu pedido y disfrutes de cervezas frías que llegan a la puerta de tu casa al instante.</p>
                    </Card.Footer>
                </Card>
            </Container>
        </div>
    );
}

export default SignIn;