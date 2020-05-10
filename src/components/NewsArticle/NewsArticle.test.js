import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import NewsArticle from './NewsArticle.js'

describe('NewsArticle', function(){

  it('Display info that we expect', function(){
    const { getByText, getByAltText, debug } = render(
      <NewsArticle
        headline = {"Test Headline"}
        description = {"Test Description"}
        img = {"https://i.kinja-img.com/gawker-media/image/upload/s--36OH1KfJ--/c_scale,dpr_2.0,f_auto,fl_progressive,q_80,w_800/k5ppabp7phb3cq6vsv49.jpg"}
      />);

    expect(getByText("Test Headline")).toBeInTheDocument();
    expect(getByText("Test Description")).toBeInTheDocument();
    expect(getByAltText("image for Test Headline")).toBeInTheDocument();
    expect(getByText("Click Here To Read Article")).toBeInTheDocument();
  });


});
