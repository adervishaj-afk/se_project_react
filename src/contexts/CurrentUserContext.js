import React, { useState } from "react";

const CurrentUserContext = React.createContext({
  userData: { _id: "", username: "", email: "" },
});

export { CurrentUserContext };
