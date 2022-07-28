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
    HighlightCards,
    Transactions,
    Title,
    TransactionList




} from "./styles";
import { RFValue } from "react-native-responsive-fontsize";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";


export interface DataListProps extends TransactionCardProps {
 id: string;
}

export function Dashboard() {

    const data: DataListProps[] = [{ 
        id:"1",
        type: 'positive',
        title:"Desenvolvimento de site",
    amount:"1btc",
    category:{
        name: 'vendas',
        icon: 'dollar-sign'
    },
    date:"12/12/21"},
    {   id: '2',
        type: 'negative',
        title:"Desenvolvimento de site",
    amount:"2btc",
    category:{
        name: 'Alimento',
        icon: 'coffee'
    },
    date:"12/12/21"},
    {   
        id: '3',
        type: 'negative',
        title:"Desenvolvimento de site",
    amount:"3btc",
    category:{
        name: 'Casa',
        icon: 'shopping-bag'
    },
    date:"12/12/21"}
]
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
            <HighlightCards 
             >
             <HighlightCard 
             
             title="Entradas" 
             amount="R$17.400,00"
              lastTransaction="Última entrada dia 13 de Abril"
              type="up" />
              <HighlightCard title="Saídas" 
             amount="R$7.400,00"
              lastTransaction="Última saída dia 13 de Abril"
              type= "down"/>
              <HighlightCard title="Total" 
             amount="R$10.000,00"
              lastTransaction="01 à 13 de abril "
              type= "total"/>
             
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>
                <TransactionList data={data}
                keyExtractor={(item: { id: DataListProps; }) => item.id}
                renderItem={({item}) => <TransactionCard data={item}/>}
              

                


                
                />

            </Transactions>
           
        </Container>
    )
}
