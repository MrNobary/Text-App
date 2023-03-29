import React from "react";
import styled from "styled-components";

const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 70vh;
    height: 80vh;
    border: 1px solid black;
    border-radius: 10px;
    background-color: lavender;
`

const InputField = styled.section`
    display: flex;
    justify-content: space-evenly;
    border-top: 1px solid black;
    padding: 10px;

    input {
        border: none;
        border-radius: 5px;
        padding: 10px;
        margin: 5px;
    }

    button {
        border: none;
        background-color: lightgreen;
        border-radius: 10px;
        padding: 5px;

        :hover {
            background-color: green;
        }
    }
`

const ChatField = styled.section`
    display: flex;
    flex-direction: column;
    height: 90%;
    padding: 0 80px;
`

const TextBalon = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: "#DDF7C8";

    button {
        border: none;
        color: red;
        background-color: lavender;

        :hover {
            width: 25px;
        }
    }

    div {
        display: flex;
        align-items: center;

        span {
            font-weight: bold;
            margin-right: 8px;
        }
    }
`


export class Chatbox extends React.Component {

    state = {
        chat: [
            {

            }
        ],

        valorInputUser: '',
        valorInputText: ''
    }

    enviarMensagem = () => {
        const novaMensagem = {
            user: this.state.valorInputUser,
            content: this.state.valorInputText
        }

        const mensagens = [...this.state.chat, novaMensagem]

        this.setState({chat: mensagens, valorInputText:''})
    }

    onChangeUser = (e) => {
        this.setState({valorInputUser: e.target.value})
    }

    onChangeText = (e) => {
        this.setState({valorInputText: e.target.value})
    }

    delMessage = (indexRecebido) => {
        const novaLista = this.state.chat.filter((chat, index) => {
            return index !== indexRecebido
        })

        this.setState({chat: novaLista})
    }

    render() {


        return(
            <Body>
                <ChatField>
                    {this.state.chat.map((message, index)=>{
                        return <TextBalon key={index}>
                            <button onClick={()=>this.delMessage(index)}>x</button>
                            <div>
                                <span>{message.user}</span>
                                <p>{message.content}</p>
                            </div>
                        </TextBalon>
                    })}
                </ChatField>

                <InputField>
                    <div>
                        <input 
                        placeholder="Usuario"
                        value={this.state.valorInputUser}
                        onChange={this.onChangeUser}
                        />

                        <input 
                        placeholder="Mensagem"
                        value={this.state.valorInputText}
                        onChange={this.onChangeText}
                        />
                    </div>
                    <button onClick={this.enviarMensagem}>Enviar</button>
                </InputField>
            </Body>
        )
    }
}