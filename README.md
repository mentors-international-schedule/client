# Mentors International Training Reminders Client

## About

This is the front-end for the Mentors International Training Reminders project, which is part of Lambda School Build Week.


## Spec

- [Wire Frame](https://balsamiq.cloud/sw751l9/pgofw0d)
- [Mentors International](https://mentorsinternational.org/)

Pitch: Mentors International is redesigning their microfinance training. The biggest problems are clients forgetting the material between sessions, forgetting to come to trainings, and difficulty taking time to travel to the training.

MVP Feature Breakdown:
Login/Signup Pages: A mentor can login in to an existing account with Username, and Password and a Phone Number or a user can sign up for an account with a username, and password and phone number or e-mail. The account is associated with an organization.

Group creation: modal or single page. teacher should create a separate group for each class they teach. 

Home Page: on login a user is sent to a list view page where they can see a list of their recent messages they’ve created. 

Message Page: modal or page.  create the text message to be sent. For the MVP you do not need to include the ability to create new contacts, or schedule messages for later. Focus on creating the messages, and the ability to save them as a draft or send them immediately. 

Notifications: When it's time for the message to be sent, recipient will receive text notifications through Twilio sent to their phone or whatsapp number entered by the mentor.

Stretch Goal: Scheduling Page: User can create a message schedule to be automatically sent by adding a group of contacts, date to be sent, and selecting the message to be sent.  
Allow a 2nd user type (board member) to be able to log in and see trainer’s profiles based on an invitation. They can also Create, Read, Update and Delete messages to send client groups.

## How to start

Clone this repository locally. **Do not fork it**.
Once you clone the repo locally:
```
git checkout -b <lastname-firstname>
git push -u origin <lastname-firstname>
```

You will now have your own branch, that you can make commits to. Whenever you want, you can do `git push` to send your commits to your remote on the server.

## Basic git flow

When you want to get your branch merged into the master branch, do the following:
```
git pull origin master
```
Look at your terminal messages. If there is a merge conflict, you will need to resolve it. If you don't know how to resolve it, please request assistance! If there was no merge conflict, then you can now do:
```
git push
```
And then go to your branch on github and create a pull request into the master branch.

## File Structure

This file is set up as a Node server, so that we can serve up the static landing page, and the SPA app from the same url.
If you are working as User Interface on the landing page, you will work out of the `/landing` folder.
If you are working as Front End Architect on the core front end application, you will work out of the `/app` folder, which has been initialized by Create-React-App.
