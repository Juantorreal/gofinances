import React from "react";
import { 
    Container, 
    Header, 
    UserWrapper,
    UserInfo,
    Photo,
    User,
    Icon,
    UserGreeting,
    UserName,




} from "./styles";
import { RFValue } from "react-native-responsive-fontsize";

export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                <UserInfo>
                    <Photo source={{uri: 'https://avatars.githubusercontent.com/u/82403809?v=4'}} />
                    <User>
                        <UserGreeting>Olá,</UserGreeting>
                        <UserName>Juan</UserName>

                    </User>
                </UserInfo>
                <Icon name="power"/>
                </UserWrapper>
            </Header>
        </Container>
    )
}
