import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import Form from "./Form";
import TextShow from "./TextShow";

export default function App() {
  return (
    <div className="App">
      <Form />
      <TextShow />
    </div>
  );
}
