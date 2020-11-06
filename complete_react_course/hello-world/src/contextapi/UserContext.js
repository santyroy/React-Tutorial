import React from "react";

// There are 3 steps to use Context API
// 1. Create Context
// 2. Provide a Context value - provider (Provider Component is responsible to provide a value to all the descendent components)
// 3. Consume the Context value - consumer

// BELOW IS STEP 1
const UserContext = React.createContext("Default value");

// Here the default value will be consider if we do not provide <UserProvider value="Sougata"/>

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;
