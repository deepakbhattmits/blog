import React from 'react';
import PostList from './PostList';
import RegisterForm from './RegisterFrom';
const App = () => {
    
    return (
        <div className="ui container">
            <RegisterForm />
           <PostList /> 
        </div>
    );

}
export default App;