# T-Shirt Folding App

This is a mobile application built using React Native and Expo. The app helps users keep track of the number of T-shirts they have folded and displays the current Bluetooth connection status.

## Features

- Fold button with T-shirt icon and action
- Circular progress animation around the fold button
- Responsive design that adapts to different device orientations (portrait and landscape)
- Displays Bluetooth connection status (connected or disconnected)
- Stores and retrieves the T-shirt count using AsyncStorage

## Getting Started

### Prerequisites

Before you begin, make sure you have the following software installed on your machine:

- Node.js (v12 or higher)
- Expo CLI
- A code editor such as Visual Studio Code

### Installation

1. Clone this repository:

```sh
https://github.com/rabi3daoudd/t-shirt-folder.git
```

2. Change to the project directory:

```sh
cd tshirt-folding-app
```

3. Install the project dependencies:

```sh
npm install
```

4. Start the Expo development server:

```sh
expo start
```

5. Use the Expo Go app on your mobile device or an Android/iOS emulator to run the app.

## Usage

1. Upon opening the app, you will see the main screen containing the fold button, Bluetooth connection status, and T-shirt counter.

2. Press the "Fold" button to increment the T-shirt count. A circular progress animation will appear around the button.

3. The app will display the current Bluetooth connection status. Replace the `bluetoothConnected` variable in `HomePage.js` with the actual Bluetooth connection status from your device.

4. The T-shirt count is stored using AsyncStorage, so it will persist even if the app is closed or reloaded.

5. The app will adapt its layout based on the device's orientation (portrait or landscape).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
