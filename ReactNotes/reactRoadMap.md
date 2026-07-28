react is javascript library for building user interfaces.created by facebook
we learn react to build userinterfa and it helps to build complex frontend(complex front end means like where one button triggers changes in multiple place)

the difference between framework and library is framework is very strict and library is not that much strict.

import react from 'react' => react core foundational library.in this react is used to take refrences and react-dom is the implementation of the react on the web.react create his own DOM called the virtual DOM.the power od react is we can render the html element with help of the javascript.we can render custom tag with help of react


app take html element and index.js can render that function in app that is taking html element.we are writing html through the javascript

in index.html we are not loading javascript but how the index.js is loading in index.html???
ans ==>it because to due to react-scripts present in the package-json

<>==> fragement
return(
    <>
    <chai/>
    <p></p>
    </>
)
==> acc to the rule of jsx we can return one element but this is 2 element but we can return many element inside one element of we use div but we can also use just <> </>

why react is called single page element ==> because react use javascript to swap content in and out of that same page without even reloading the browser or asking the server for new html page.it feels like you are moving between pages but you are really still on the same single html page the whole.just content inside it's changing

Every react code use bundler (vite,pabble).this bunddler help to improve the syntax,upgrade the syntax