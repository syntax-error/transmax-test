# Technical Test for Transmax

This repository is a response to the technical test set by the team at Transmax. 

### Thoughts, Assumptions and Reasoning

#### The task as a whole
>I was personally unfamiliar with any about React other than its place in the current web ecosystem of libraries; so it was a busy time for me not only completing a test with a strong CSS component, but learning to do so from scratch.
> 
> I haven't read up on anything beyond the basic docs provided at React, and mostly based the structure of the application on my own experience with Vue.js.
> 
> Ultimately, I found the challenge time-consuming but educational and rewarding in its own way

#### Sidebar.js
>This is where I started the application. I mocked up some basic shapes, and the body/sidebar dynamic. As I proceeded in fleshing out the rest of the application, I quickly looked for a way to modularise the sidebar into individual child components.
> 
> As the open/close chevron horizontally overlaps with vertical line of the content, I opted to not render the content when the sidebar is collapsed. This gives an unsquishing effect when the bar reopens. It also doesn't preserve the state of the internal dropdowns for ramps and routes. Those factors are something I'd mark for more polish.

#### SidebarWeather.js
>The most obvious difference here are the icons used for weather. I'm utilising FontAwesome for the icons, so I can't replicate the exact style presented in the mock up; but I believe I've replicated its intent.
> 
>I designed the state to simulate the results of an API call. I also utilised dictionaries and enums for ensuring consistency.
> 
> You'll find that I save dateFormatter and timeFormatter outside the component. This is simply to reduce calls to Intl.DateTimeFormat, since we can reuse the one copy as many times as needed
> 
> I chose Intl.DateTimeFormat to require as few additional libraries as possible, though suffixes proved to be a shortfall in approach. 
> 
> The clock live updates, just to show off that I learnt that lesson.

#### SidebarRoutes.js
> I tried a different approach when collapsing here, because none of the content would be visible when the panel is closed. I like the effect much better.
> 
> However, the CSS approach I've used requires me to have fixed height so that it can animate smoothly. This limits to showing space for 4 concurrent SidebarRoutes, even if there are more or less available for display. In the future, I might look into using style and/or maybe css vars to overcome this limitation.
> 
> This was also my first foray into using Array loop functions to display a potentially dynamic list of content.

#### SidebarRamps.js
> It's at this point I realised I should make the dropdown format I used in SidebarRoutes into its own component able to take child components. It took some refactoring, but I'm pleased with the outcome. Nice and reusable.
> 
> The CSS on this was a feat of engineering I'm still coming to terms with. That I managed to harness the [Pure CSS Pie Charts](https://codeburst.io/how-to-pure-css-pie-charts-w-css-variables-38287aea161e) in this component was wonderfully satisfying, and I'm mostly pleased with the result. Though it can occasionally glitch and show a little gap between wedges, which is unfortunate.
> 
> Utilising what was already in the CSS and enabling the labels to animate with the pie chart is a feat I am particularly proud of.

#### A unit test
> Since all the data was statically generated anyway, I felt that testing if SidebarWeather or SidebarRoutes was displaying a particular piece of text to be too trivial.
> 
> I instead opted to do something a tiny bit more intense, testing that a component has an initial DOM state, and that when interacted with (a click), its DOM state changed.

#### Thoughts on React vs Vue
> In my first interview I was asked I felt about the differences between the two frameworks. Having not had a chance to tackle this test, I wasn't able to answer then. So here are more thoughts after the fact:
> 
> I don't dislike React. It has a lot of elegance in its design, and the jsx coding is very nice.
> 
> However, I think that Vue has a smidge more elegance to it. Vue's directives (v-if, v-for), are a bit nicer to look at than a pair of curly braces and a statement spitting out jsx.
> 
> Vue also allows child elements to be slotted into multiple places in a component, instead of just the one place with `this.props.children`.
> 
> But I've had a weekend with React, and 2.5 years with Vue. I'm sure React has more charms to unleash on me yet.

### Exploring the technical test
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and therefore has the following npm commands that you can run in the project directory:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.