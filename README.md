# EatClub - Restaurant Deals - App

A React-based restaurant listing and detail app that allows users to:

- View restaurants with deals
- Filter restaurants by name or cuisine
- View restaurants by maximum discount
- View detailed restaurant information including working hours, address, and deals

---

## Features

- Restaurant listing with search and filtering by name and cuisine
- Default sorting restaurants by highest deal discount
- Detail page for each restaurant:
  - Restaurant image
  - Menu / Call / Location / Favorite action buttons
  - Cuisines, working hours, and address
  - Deals list sorted by maximum discount

## Installation

1. Clone this repository from the main branch
2. Install dependencies: npm install
3. Start the dev server: npm run dev

## Usage
- Search for a restaurant or cuisine in the search bar
- Click a restaurant to see detailed info and deals
- Deals are sorted by discount percentage
- Action buttons (Menu, Call, Location, Favorite) are placeholders for further integration

## Notes & Future Improvements
- Sorting always uses the maximum discount per restaurant
- Debounced search can be used to prevent unnecessary re-renders
- Action buttons can later be connected to actual functionality (e.g., calling the restaurant, showing the menu, navigating to location)
- Consider adding pagination or infinite scroll for large restaurant lists
- UI can be enhanced with icons, colors, and hover effects

## Author
Bhavya Kothari
