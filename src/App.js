import React from 'react';
import ReactDOM from 'react-dom';
import { ChatEngine} from 'react-chat-engine';
import  ChatFeeds  from './components/ChatFeeds';
import LoginForm from './components/LoginForm';
import './App.css';
function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <div className="App">
      <ChatEngine 
        height = "100vh"
        projectID = "13bf235a-42db-4012-806f-9dd8da09daf6"
        userName= {localStorage.getItem('username')}
        userSecret= {localStorage.getItem('password')}
        renderChatfeed = {(chatprops) => <ChatFeeds {...chatprops}/>}
      />
    </div>
  );
}

export default App;
