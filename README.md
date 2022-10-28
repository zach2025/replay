# Replay (WORK IN PROGRESS)

## Introduction
Replay is a platform to review and share ratings and opinions on songs, albums, and artists.

## Current Development
Currently, Replay is being built. The foundations have been laid but are not completed just yet. Work on both the front-end and back-end are needed and thus many features/long-term goals have not been accomplished.

## Local Setup
Local setup for running Replay in it's current state is easy, simply follow the directions below:
- First, make sure you have [Node.js](https://nodejs.org/en/) and [React](https://reactjs.org/tutorial/tutorial.html#setup-for-the-tutorial) installed
- Next in your command line interface **`cd`** to the name of the app (the last **`cd`** should be **`cd replay`**) and run **`npm install`**
- Also in that same command line interface run **`npm install @mui/material @emotion/react @emotion/styled`**, **`npm install @mui/icons-material`**, and **`npm install react-router-dom`** one right after the other
- Lastly in the same command line interface run **`npm start`**, and the application should now pop up in your default browser

## Long Term Goals
Designed to be a social application, the ability to share your ratings within and outside of Replay ois key. Within Replay there will be a dedicated Feed tab in which everyone you follow, whether that be your friend or an artist, will have the ratings they most recently made shared. Think of it like giving a review on Amazon, once you publish it it is public to the world. But in this case it will only be directly shared to everyone who follows you, though your ratings are still public on your profile. For sharing your reviews outside of Replay, A link to the track or album you reviewed with a preview of your review will be shareable, taking the person you shared it with directly to your review.

Replay will have integrated music listening with a connected Spotify and/or Apple Music account. With this, Replay will be able to read certain songs you have listened to recently and suggest not only which song or album you should rate, but as well as a rating based on the number of plays over a set period of time and replays in a listening session. In the far future partnerships with services like Spotify, Apple Music, or even others such as YouTube Music, Pandora, and more can make this transfer of information a lot easier.

Using the numerical values of reviews, the amount of review traffic on a specific album/song, and data from Spotify, a Charts tab will be available tabulating the Top 100 songs given different parameters, such as genres, regions, ect. (i.e. Top 100 of R&B, Top 20 of USA)

For artists, you will have a special artist-facing version of Replay you will have access to which will allow you to see certain statistics, such as the average rating of your newest album, most shared reviews of one of your songs, and much more information that is already public without the artist-facing version of Replay, but now in a easily digestible format.

## Features List
- Rating & Reviewing System
- Database to store Ratings & Reviews
- Display Reviews & Ratings publicly on all Profiles (Profiles are linked to Service Accounts but are in a seperate database to store the Ratings & Reviews)
- Display calculated most popular songs and albums based off of Service APIs, Ratings, & Reviews
- Integrated Music Player
- [Spotify](https://developer.spotify.com/documentation/web-api/) and [Apple Music](https://developer.apple.com/documentation/applemusicapi) API (Database and Service Account)
