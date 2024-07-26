import React, {useState} from "react";

const CurrentUserContext = React.createContext({
  userData: { username: "", email: "" },
});

export { CurrentUserContext };
