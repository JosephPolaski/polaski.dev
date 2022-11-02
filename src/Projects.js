import React, { useEffect, useState } from 'react';
import './Projects.css';
import { getRepoDataProps } from "./ApolloClient/client"
import { IconName } from "react-icons/di";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export function Projects() {

    const [pinnedRepos, setRepos] = useState({});

    useEffect(() => {
        getRepoDataProps()
        .then(data => 
            setRepos(data)                
        );
    }, []);

    if(pinnedRepos.props){
        return(
            //console.log(pinnedRepos.props.pinnedRepos)        
            <div className="cont">
                <Row>
                    {pinnedRepos.props.pinnedRepos.map(item =>
                        <Col key={item.name} xs={4}>                                      
                            <Card bg="dark" text="light">                            
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{item.primaryLanguage.name}</Card.Subtitle>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>                                    
                            </Card.Body>
                            </Card>                            
                        </Col>
                    )}  
                </Row>
            </div>        
        );
    } else {
        return('Error Loading Data From GitHub...')
    }
    
        
   

}

export default Projects