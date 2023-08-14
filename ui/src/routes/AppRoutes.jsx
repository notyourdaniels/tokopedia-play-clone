import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../page/Home';
import Video from '../page/Video';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:videoId" element={<Video />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
