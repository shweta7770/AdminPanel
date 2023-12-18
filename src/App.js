import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Admin, Resource, EditGuesser } from 'react-admin';
import { PostEdit } from './posts'
import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';
import { PostList } from './posts';
const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

function App() {
  return (
    <Admin dataProvider={dataProvider}>
    
      <Resource name="users" list={UserList} />
      <Resource name="posts" list={PostList} edit={EditGuesser} />
    </Admin>
  )
}

export default App;
