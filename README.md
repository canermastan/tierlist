# League of Legends Tournament Tier List

A static web application that displays tier lists for League of Legends champions by role and team compositions.

## Features

- **Role Tier Lists**: Displays the strongest champions for TOP, JUNGLE, MID, ADC, and SUPPORT roles
- **Special Effects**: Top 3 champions in each role have special visual effects (gold, silver, bronze)
- **Team Composition Tier List**: Shows optimal team compositions with role-specific champions
- **Alternative Picks**: Each composition includes alternative champions for each role
- **Responsive Design**: Works on both desktop and mobile devices

## How to Use

1. Simply open the `index.html` file in a web browser.
2. Use the tab buttons at the top to switch between "Role Tier List" and "Comp Tier List" views.

## Customization

You can customize the tier lists by editing the champion data in the `script.js` file:

- `championData` object contains the champion tier lists for each role
- `compData` array contains the team composition information

## Project Structure

- `index.html` - Main HTML file with the page structure
- `styles.css` - CSS styles for the tier list
- `script.js` - JavaScript code to populate and handle the tier lists

## Credits

- Champion data and images from Riot Games' Data Dragon API
- League of Legends © Riot Games, Inc.

## Note

This project is intended for tournament use only and is not affiliated with or endorsed by Riot Games. 