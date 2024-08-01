import React, { useState, useEffect } from "react";

const CurrentUserContext = React.createContext({
  userData: { _id: "", username: "", avatar: "", email: "", name: "" },
});

export { CurrentUserContext };
