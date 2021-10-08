import MessageType from "./MessageType";
import MyMessage from "./MyMessage";
import ReceiveMessage from "./ReceiveMessage";
const ChatFeeds = (props) => {
    const {chats, activeChat, userName, messages} = props;
    const chat = chats && chats[activeChat];
    const renderMessages = () => {
        const keys = Object.keys(messages);
        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessagekey  = index === 0 ? null : keys[index-1];
            const isMyMessage = userName === messages.sender.userName;
            return(
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className="message-block">
                        {isMyMessage? <MyMessage />
                        : <ReceiveMessage />}
                    </div>
                    <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
                        read-receipts
                    </div>
                </div>
            )
        })
    }
    return(
        <div>
            ChatFeed
        </div>
    );
}
export default ChatFeeds;