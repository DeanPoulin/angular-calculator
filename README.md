# HMS UI Developer Interview Question

## Developer Setup Instructions

1. Install the [Yeoman](http://yeoman.io) stack with generator angular if you haven't already.
  - Prerequisites
    - node.js - [http://nodejs.org/](http://nodejs.org/)
    - git - [http://git-scm.com/](http://git-scm.com/)
    - ruby - [https://www.ruby-lang.org/en/](https://www.ruby-lang.org/en/)
    - compass - [http://compass-style.org/install/](http://compass-style.org/install/)
  - Install yo and generator angular through npm globally.
    - npm install -g yo
    - npm install -g generator-angular

2. Fork this repository and clone your fork to your local machine.

3. In /src run the following command to bootstrap the node and bower dependencies:
  - npm install && bower install

4. Run the application with grunt
  - grunt serve

5. Develop the calculator and send a pull request when you've completed the development task defined below.

## Your Task

Your task, if you so choose, is to create a simple calculator leveraging Twitter Bootstrap 3 and AngularJS. This calculator has no back-end persistence, so you can envision that each user that opens the app will have a simple calculator they're using and the application does not store or retrieve any data from a back end service.

The application has been scaffolded using [yeoman](http://yeoman.io/) to give you something to start with. It is using AngularJS, SCSS, and Twitter Bootstrap 3. To get up and running with 

The UI should look like the screen shot below and should work like a simple desktop calculator.

![Image](https://raw.githubusercontent.com/DeanPoulin/angular-calculator/master/mockup.png)

When the web page starts up it is in the off state.

Click the On/Off button to turn the calculator On or Off. When the calculator is Off the button will say On. When the calculator is On the button will say Off.

When you start to perform a calculation the screen of the calculator should show what you're trying to perform. Here's an example application flow:

- Calculator is in Off state, the "Screen" is blank and History is not Visible.
- Click: On
- Screen Shows: 0, On Button changes to Off, History is visible and has no items in the list.
- Click: 1
- Screen Shows: 1
- Click: +
- Screen Shows: 1 +
- Click: 1
- Screen Shows: 1 + 1
- Click: =
- Screen Shows: 2 and History has a new item pushed on the top of the stack that shows 1 + 1 = 2
- Click: *
- Screen Shows: 2 * 
- Click: 3
- Screen Shows: 2 * 3
- Click: =
- Screen Shows: 6 and History has a new item pushed on the top of the stack and shows 2 items: 1 + 1 = 2, 2 * 3 = 6
- Click: AC
- Screen Shows: 0, History is cleared.
- Click: Off
- Screen becomes blank, Off button text changes to On, History is hidden.

