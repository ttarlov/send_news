import React from 'react'
import NewsContainer from './NewsContainer.js'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

describe('NewsContainer', function(){

    it('should render articles on the DOM', function(){
    const { getByText, getByAltText } = render(
      < NewsContainer news= {[{
        headline:"test headline",
        description:"test description",
        img: "https://i.kinja-img.com/gawker-media/image/upload/s--36OH1KfJ--/c_scale,dpr_2.0,f_auto,fl_progressive,q_80,w_800/k5ppabp7phb3cq6vsv49.jpg",
        url: "https://thegrapevine.theroot.com/snoop-dogg-s-newborn-grandson-dies-just-10-days-after-h-1838547124"
      }] } />);

      expect(getByText("test headline")).toBeInTheDocument();
      expect(getByText("test description")).toBeInTheDocument();
      expect(getByAltText("image for test headline")).toBeInTheDocument();

    });

});
