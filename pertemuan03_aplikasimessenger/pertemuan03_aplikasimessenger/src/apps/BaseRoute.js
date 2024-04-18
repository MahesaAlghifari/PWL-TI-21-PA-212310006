import React from "react";
import { Routes, Route } from "react-router-dom";
import ChapterOne from "../modules/chapter-1/ChapterOne";
import { ChapterTwo } from "../modules/chapter-2";
import Auth from "../modules/chapter-2/widgets/authentifications";

export default function BaseRoute() {
  return (
    <React.Suspense>
      <Routes>
        <Route index element={<ChapterTwo />} />
        <Route path="messenger" element={<ChapterOne />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="login" element={<Auth />} />
        
      </Routes>
    </React.Suspense>
  );
}

const Home = () => {
  return <h3>Ini home looo…</h3>;
};
const Error = () => {
  return <h3 className="text-white">Ini Error</h3>;
};
