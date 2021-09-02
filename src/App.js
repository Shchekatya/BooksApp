import React from 'react';
import BooksList from './Books/BooksList'
import Context from './context';
import AddBook from './Books/AddBook';


function App() {
  const [books, setBooks] = React.useState(
    [
      {id:1, completed: false, 
        title:'451 градус по фаренгейту',
        author: 'Брэдбери, Рэй', year: '1953' },
      {id:2, completed: false, 
        title:'Облачный атлас',
        author: 'Митчелл, Дэвид', year: '2004' },
      {id:3, completed: false, 
        title:'О дивный новый мир',
        author: 'Хаксли, Олдос', year: '1931' },
  
    ]
  )


function toggleBook(id) {
  
  setBooks(books.map(book => {
    if (book.id === id) {
      book.completed = !book.completed
    }
    return book
  }))
}

function removeBook(id){
  setBooks(books.filter(book => book.id !== id))
}

function addBook(title, author, year){
  setBooks(
    books.concat([
      {
        title,
        author,
        year,
        id: Date.now(),
        completed: false
      }
    ])
  )
}

  return (
    <Context.Provider value={{ removeBook: removeBook }}>
   <div className='wrapper'>
     <h1 className='h1'>Books to read</h1>
     {books.length ? (<BooksList books={books} 
     onToggle={toggleBook} />) : 
     (<p>Nothing to read</p>)}
     <AddBook onCreate={addBook}/>
   </div>
   </Context.Provider>
  )
}

export default App;
