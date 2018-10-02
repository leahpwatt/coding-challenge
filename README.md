My Notes on the Ambassador Coding Challenge:

This code example is a front-end CRUD app that provides a way for contributors to view and add referral links. Each item is linked to its own page. Contributors can also edit the titles of existing links or delete them. I hardcoded some data for users to see examples of what to contribute.

The app is built in React and uses a combination of semantic-ui-react and material-ui libraries; I selected these because they are user friendly and aesthetically pleasing in their simplicity. I also pulled SASS into the project instead of using raw CSS (the html-css-exercise demonstrates my ability to use raw CSS).

Unfortunately, due to time limitations, I was not able to fulfill the following requirements: incrementing clicks based on links accessed, and storing the data between pages. Time permitting, I would build out these features. In the CSS exercise, I still have some work to do on the numbers; other than that, the exercise is fairly well complete. I tried to use a range of selectors and declarations to demonstrate my well-rounded knowledge.

Here is a link to the application in its current state, deployed on Heroku: 

Additionally, here is an example of a challenge I did last week: https://fast-ocean-64019.herokuapp.com/
Here is a link to the repo: https://github.com/leahpwatt/react-weather-app
This is a weather app, built in React, that utilizes the openweathermap api. It displays the current temperature of the user's location (you'll have to give permissions when the page loads), as well as the 5-day forecast. It is also not what I would deem "complete"; however, it is what I was able to accomplish given the 4-5 hour window of time. I hope this helps provide an additional example of my capabilities.


# Ambassador Coding Challenge

Our coding challenge is your opportunity to demonstrate your experience, skills, and aptitude by building a prototype of the web’s most minimal referral automation software.

## How we review

Your submission will be reviewed by the Ambassador engineering team. We take your experience level into consideration when reviewing.

We value quality over completeness. If you decide to leave things out, please call attention to it in your project's `README`. We are looking to evaluate your skill set and gain insight into how you approach problem solving.

Our assessment covers the following areas:

-	Architecture - How have you decided to structure your app? Is there good separation of concerns?
-	Code quality - Are you following good coding practices? Is your code easy to follow and maintain? Is it testable?
-	Correctness - Does your application work? Does it meet the functional spec?
-	Technical choices - Are your choices of libraries, packages, and tooling appropriate?

Bonus points:

-	Testing - Is there adequate test coverage?
-	UX - Is your project easy to use and understand?

## Guidelines

This project may take some time depending on your familiarity with the frameworks and tools you choose. Make your initial commit very small or blank so that we can get a sense of your style and speed. If you have any questions please do not hesitate to [contact us](eng-challenge@getambassador.com).

Begin by forking this repo. You will be completing the challenge in the forked repo and sending a link to your repo when you're finished.

### Background

The year is 1991, and Tim Berners-Lee has just invented the World Wide Web. As his best friend, he turns to you for help growing this crazy new thing. You decide referral marketing is the most effective way to grow support for Tim’s invention and plan to bring word of mouth to the web in the form of a simple, automated referral system.

The system you’ve dreamt up is very straightforward. It only needs two pages to satisfy Tim’s needs: one to create, edit, delete, and track referral links and another to serve as a landing page for the links that promotes the World Wide Web.

### Functional spec

The link page is where Tim will manage his referral links. This page should be located at the root of your domain i.e. {your_url}. There should be a form to add links. It only needs one field, which is the unique title of the link e.g. spartans or wolverines. This title will form the referral url e.g. {your_url}/spartans or {your_url}/wolverines. Below this form should be a list of the active referral links with options to edit or delete links. The # of times a link has been clicked should be tracked and displayed next to each link in the list. The link title should link to the Landing Page.

![Link Page](https://lh4.googleusercontent.com/E03q_HNyAyBCgyuiLN_UMkqmygSH4k1n2sZAG5p4EyothDtwXIh81nuXF0--JUsJs3PQaJJV_oIKvVqIPlNSU96Q4zT3N1f6E6Pl0XJk7wdqruNi69RlV7yUd_FhztzJEbZUkA)

The landing page is where each referral link should redirect. This page should be located at its own unique url i.e. {your_url}/landing. The content of this page is not important, though you should feel free to use it as a canvas to promote and express your feelings toward the World Wide Web for Tim. When each referral link redirects to the landing page, the link title must be appended as a query parameter in the url e.g. {your_url}/landing/?link={link_title}. The link title should be grabbed from the query parameter and displayed somewhere on the landing page, which is the only content you actually have to include.

![Landing Page](https://lh3.googleusercontent.com/HFEsNHwWaII66dB_Pa5nm8WZgPOp3F-jSyMxwFAwyO04O7dFlHovFW9hKovR6IbL6eaxCxKlq4iK30r2lVM8-ykjnllC0Ga85MtEenmZ52DnhR3ZhiGRFV_mY44HZClXD8TGIw)

### Technical spec

Choose one of the following technical tracks to build the functionality described in the Functional spec that best suits your skill set:

-	Back-end track: build a REST API and include a minimal front-end (e.g. a browsable API)
-	Front-end track: build your project as a purely client-side app
-	Full Stack: blend the former approaches, but be sure to demonstrate your competence across the stack
-	Mobile track: use the native SDKs for Android or iOS

#### Back-end

Your task is to build a REST API that can support the functionality described for the Link and Landing pages in the Functional spec. Please use [Django Rest Framework](http://www.django-rest-framework.org/) and host your project on [Heroku](https://dashboard.heroku.com). Your API should be able to:

-	Perform CRUD actions for Link pages
-	Track the number of visits to the Landing Page

You do not have to build a functional UI unless you want to show off your talents across the stack. We will test your API by using the Browsable API. You are encouraged to write tests to verify your own results.

#### Front-end

Your project can be built using any JavaScript or CSS framework though we encourage ReactJS, Redux and raw CSS/SCSS as these are used every day at Ambassador. You are also welcome to use our [React conventions library](https://www.google.com/url?q=https://www.npmjs.com/package/react-conventions&sa=D&ust=1481139227208000&usg=AFQjCNGhGao9--iGsEpopQzy4H4xhXkhzw) to help build your UI. When you're done, host it on [Heroku](https://dashboard.heroku.com).

Alternatively, feel free to swap out similar JavaScript frameworks such as Angular and UI kits such as Bootstrap. In addition to building the referral application, complete the HTML/CSS challenge which can be found in the `/html-css-exercise` [folder in the repo](https://github.com/GetAmbassador/coding-challenge/tree/master/html-css-exercise).

#### Mobile

If you're interviewing for a mobile position, use the native SDKs for Android or iOS to build the UI described above. Usage of open-source libraries is not required, but feel free to demonstrate your knowledge of the mobile ecosystem (ex. the libraries at http://square.github.io/). If you're interviewing for a combination Front-end/Mobile position, you can blend in your Front-end work into the app using a WebView.

#### README

In your repo, please include the following items in your README:

-	Description of the problem and solution.
-	Whether the solution focuses on back-end, front-end or if it's full stack.
-	Reasoning behind your technical choices, including architectural.
-	Trade-offs you might have made, anything you left out, or what you might do differently if you were to spend additional time on the project.
-	Link to to the hosted application where applicable.

This will give us insight into how you approached the challenge.

### Deployment

When you're done, please deploy your project to [Heroku](https://dashboard.heroku.com). Afterwards, send a link to your repo. If you have chosen to make your repo private, please add jarell-lloyd as an admin so we can see your work.

## Show us your other projects! (optional)

If you have existing code that you would like to share, please follow these guidelines:

-	Include a link to the repository in the README file that is part of your coding challenge submission
-	A description of what the code does
-	If the repository has multiple contributors, please call out the parts that you were responsible for
