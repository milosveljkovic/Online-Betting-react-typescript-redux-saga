import React from 'react';
import '../../design/myDesign.css'
import { Container,Row,Col,Button,InputGroup,Form } from 'react-bootstrap';

import { connect } from 'react-redux';
import { AppState } from '../../store/reducers/rootReducer';
import {MyTickets} from '../../models/MyTickets'

interface Props{
    mytickets:MyTickets[]
}

interface State{

}

class MyTicketsPage extends React.Component<Props,State>{

    render(){
        return(
            <div className="main">
                <h1 className="pageTitle ticketBackground" >My - Tickets</h1>
                <div className="sideContainer ticketBackground">
                    
                </div>
                <div className="contentContainer " >
                    <Container>
                        {   
                            this.props.mytickets.map((tickets)=>{
                            return (
                                <div key={tickets.id} className="dataContainerTickectShadow dataContainer">
                                    <h5>{tickets.title} | {tickets.win.toFixed(2)} rsd</h5>
                                    <Container>
                                    {  
                                        tickets.matches.map((ticketMatch)=>{
                                            return(
                                                <div key={ticketMatch.id} className="dataContainer dataContainerTickectShadow">
                                                    <Container>
                                                            <Row>
                                                                <Col xs={6}>
                                                                {ticketMatch.title}
                                                                </Col>
                                                                <Col xs={3}>                
                                                                {ticketMatch.finalscore}
                                                                </Col>
                                                                <Col xs={3}>                
                                                                {ticketMatch.odd}                                            
                                                                </Col>
                                                            </Row>
                                                    </Container>   
                                                </div>
                                            )
                                        })
                                    }
                                    </Container>
                                </div>
                            )
                        })
                        }
                    </Container>
                </div>
                <div className="sideContainer ticketBackground">
                    
                </div>
            </div>
        )
    }
}


function mapStateToProps(state:AppState){
    console.log(state.my_tickets,);
    return{
        mytickets:state.my_tickets,
    }
}

export default connect(mapStateToProps,null)(MyTicketsPage);