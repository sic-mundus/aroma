
<!-- ABOUT THE PROJECT -->
## About The Project

A social network that connects people who develop similar color trends.  
The funcionalities of this project are covered in this [Medium Article](https://)

Currently looking for contributoins to enhance some of the features


### Built With

* [vue](https://vuejs.org/)
* [firebase](https://firebase.google.com/)
* [quasar](https://quasar.dev/)
* Lots of love


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Here's what you need to get going.
* yarn
* quasar CLI
```sh
$ yarn global add @quasar/cli
```

### Installation
 
1. Clone the repo
```sh
git clone https://github.com/sic-mundus/aroma.git
```
2. Install dependencies
```sh
yarn
```
3. Create a project in the [Google Firebase console](https://console.firebase.google.com/) and enable the email authentication.  
It's also important to enable the Firestore and the Storage funcionalities, by selecting a location.
4. Add a Web App and follow the steps to get your configuration file
5. Add the quasar app extension dotenv.  
Make sure to follow all the steps described in the [quasar doc](https://quasar.dev/app-extensions/introduction).  
The extension instructions are covered [here](https://github.com/quasarframework/app-extension-dotenv)
This extension allows you to have different parameters for different environments.  
What you want to achieve is to have a .env.dev file in your root folder, that looks like this
```sh
apiKey=XXX
authDomain=XXX
databaseURL=XXX
projectId=XXX
storageBucket=XXX
messagingSenderId=XXX
appId=XXX
measurementId=XXX
```
6. Run
```sh
quasar dev
```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/sic-mundus/aroma/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Pietro B. - mrlouboltz@gmail.com

Project Link: [https://github.com/sic-mundus/aroma](https://github.com/sic-mundus/aroma)
