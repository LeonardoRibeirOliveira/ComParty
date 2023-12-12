import { useRef, useState } from 'react';
import Card from "@mui/material/Card";
import './chat.css';


function Chat() {
    const [message, sendMessage] = useState({
        senderId: "Eu",
        text: ""
    });

    
    const [list, upList] = useState(
      [
        {
          senderId: "Jaré",
          text: "Opaa, eae amigo tudo bom?"
        },
        {
          senderId: "Jaré",
          text: "Seja Bem-Vindo a ComParty, esta é a sua sala de chat, divirta-se e juízo hein :D"
        }
      ]
    );
    
    const handleSubmit = (e) => {
      console.log(typeof(list));
      console.log("---------");

      sendMessage({...message, text: ""})
      e.preventDefault();
    };
    
        return (
        <div className="chat">
          <p className="tittle" >ComParty</p>
          <ul className="messages" >
                {list.map((message) => {
                    return (<div key={message.id} className="list">
                        <div className="user">{message.senderId}</div>
                        <spam className="text_card">{message.text}</spam>
                        </div >
                    )
                })}
            </ul>
            <form
                onSubmit={handleSubmit}
                className="group">
                <input
                    className="text"
                    type="text"
                    value={message.text}
                    placeholder="Digite sua mensagem"
                    onChange= {(e) => sendMessage({...message, text: e.target.value})}
                  />
                    <span className="highlight"></span>
                  <span className="bar"></span>
            </form>
        </div>
        )
}

export default Chat;