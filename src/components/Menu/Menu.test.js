import React from 'react'
import Menu from './Menu.js'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

describe('Menu Component', function(){

  it('When News Category is clicked make sure sendNews is called with correct arg', function(){

    const mockSendNews = jest.fn();

    const { getByText } = render(
      <Menu selectedHeading = {"local"}
            sendNews = {mockSendNews} />)

      fireEvent.click(getByText("Local News"))

      expect(mockSendNews).toHaveBeenCalledWith("local")

  });


});
