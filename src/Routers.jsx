import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LooppingList from './training/LoopingList';
import Props from './training/Props';

const Routers = () => {
  return (
    <div>
        <h2>Looping Ls</h2>
            <ul>
                <li>
                    <Link to='/'>Looping List</Link>
                </li>
                <li>
                    <Link to='/props'>Props</Link>
                </li>
                <li>
                    <Link to='/states'>States</Link>
                </li>
                <li>
                    <Link to='/weather'>Weather</Link>
                </li>
                <li>
                    <Link to='/api'>Axios</Link>
                </li>
            </ul>
    </div>
  )
}

export default Routers