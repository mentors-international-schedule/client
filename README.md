# Mentors International Training Reminders Client

## About

This is the front-end for the Mentors International Training Reminders project, which is part of Lambda School Build Week.

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
