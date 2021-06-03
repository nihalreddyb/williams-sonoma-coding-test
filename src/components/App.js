import React from 'react';
import ProductList from './Products/products-list';
import './App.css';

const App = () => {
    return (
        <div className="root-component">
            <div className="header">
                <div className="header-content">William Sonoma Coding Test - Nihal Reddy Baddam</div>
                <div className="github-link">
                    <a target="_blank" href="https://github.com/nihalreddyb/williams-sonoma-coding-test">
                        <img alt="Github-Nihal" src="githubicon.png"></img>
                    </a>
                </div>
            </div>
            <div className="content">
                <ProductList></ProductList>
            </div>
        </div>
    );
}

export default App;