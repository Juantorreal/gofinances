import React from "react";
import { 
    Container, 
    Header, 
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,




} from "./styles";

export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                <UserInfo>
                    <Photo source={{uri: 'https://github.com/Juantorreal.png'}} />
                    <User>
                        <UserGreeting>Olá,</UserGreeting>
                        <UserName>Juan</UserName>

                    </User>
                    
                </UserInfo>
                </UserWrapper>
            </Header>
        </Container>
    )
}
