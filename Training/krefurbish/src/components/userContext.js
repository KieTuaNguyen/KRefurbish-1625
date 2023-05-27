// Step1: Create an user context
import React from "react";

const UserContext = React.createContext('Coding');

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;