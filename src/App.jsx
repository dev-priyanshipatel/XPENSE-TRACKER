import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ManageExpense from './pages/ManageExpense'
import Header from './components/Header'
import AddExpense from './pages/AddExpense'
import { Toaster } from 'react-hot-toast'
import EditExpense from './pages/EditExpense'
import About from './components/About'


const App = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manage-expense" element={<ManageExpense />} />
          <Route path="/add-expense" element={<AddExpense />} />
          <Route path="/edit-expense/:id" element={<EditExpense />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App