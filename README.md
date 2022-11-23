# Daily Program

An offline JSON parser application with React Native

https://user-images.githubusercontent.com/46620613/203604596-6d76c2cd-7832-4771-8dee-5244958b188c.mp4

## Description
* This app is created in 3 sections and 4 screens. 
* You can access the screens via navigation drawer on the left side. 
* I've used moment.js to handle date and time on the events.
* I set the utc offset to the Washington timezone ("-05:00"), You can change it on the Configs.js.
* You can find and change the source data on the "src/assets/data" folder.

### Displaying the daily program
In the "Daily" screen, the time slots are filtered based on a day and sorted in reverse chronological order. This screen implemented only for one day and you can change the day on the Configs.js.

### Displaying what happens now
In the "Currently" screen, the time slots are filtered based on the current date of user's device converted in Washington timezone, to see the happening now events.
For testing this, I added one object to the end of timeslots in the current time of the user's device. You can change this data or change the local date of your device to see the happening now events list.

### Display groupings
In the "Grouped" and "Locations" screens, you can find the presentations in more readable way. In the "Grouped" screen, I grouped the time slots by parent id relations and show them in the expanded list. And in the "Locations" screen, I just displayed the presentations grouped by their locations.


## Getting Started

To get a local copy up and running follow these steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/mahdi-sharifimehr/daily-program.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Install iOS Pods
   ```sh
   npx pod-install
   ```

### How to run app

#### iOS
   ```sh
   npx react-native run-ios
   ```
#### Android
   ```sh
   npx react-native run-android
   ```

