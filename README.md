**master**: expo init

**starting-point**: Remove extra boilerplate
* Remove all but Containers and Text from HomeScreen and SettingsScreen
* Remove LinkStack from MainTabNavigator, delete LinkScreen

**redux-basics**: Adds redux boilerplate
* yarn add redux react-redux
* Add reduxStore.js to root
* Wrap Provider around App.js
* connect HomeScreen component to redux
* console.log(this.props) to show this.props.dispatch
* Update text in HomeScreen to pick name out of this.props.name ? (needs mapStateToProps)

**settings-screen-functionality**: Adds TextInput and Button to settings screen
* Adds state to store text
* TextInput component that sets text state variable
* Button to submit (that only console logs for now)

**redux-update-state**: Updates name in state from SettingsScreen
* connect SettingsScreen to redux
* dispatch from Button OnPress to update state name
