import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SearchForm from './SearchForm.js'
import '@testing-library/jest-dom/extend-expect';

describe('SearchForm Component', function(){


  it('Should pass the right value from input', function(){


    const mockSearchNews = jest.fn()

    const {getByTestId, debug, getByText } = render(<SearchForm  searchNews = {mockSearchNews}/> )


    fireEvent.change(getByTestId("input-element"),{target:{value:"Test"}});
    // Grab the right element.

    fireEvent.click(getByText("Search Now"))

    expect(mockSearchNews).toHaveBeenCalledWith("Test")



  });



});
