import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Context from '../context';


function BookItem({book, index, onChange}) {
    const { removeBook } = useContext(Context)
    const classes = ['trtable']

    if (book.completed) {
        classes.push('done')
    }

    return (
    <tr className={classes.join(' ')}>
        <td><label className="custom-checkbox">
        <input type="checkbox" 
        cheched={book.completed}
        onChange={() => onChange(book.id)}
        />
        <span></span>
        </label></td>
        <td>{index+1}</td>
         <td>{book.title}</td>
          <td>{book.author}</td>
         <td>{book.year}</td>
         <td><button 
         className="btnDelete"
         onClick={() => removeBook(book.id)}
         >&times;</button></td>
    </tr>
    )
}

BookItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}


export default BookItem