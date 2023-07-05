import React from "react";
import "./styles/HomePage.css";

// REDUX
import { useSelector, useDispatch } from "react-redux";

import { axiosTopStoriesGetRequest } from "../api/axios_requests";
import { setTopStories } from "../redux/reducer";
import Card from "../components/Card";

function HomePage() {
  // REDUX = DISPATCHER/SELECTOR
  const dispatch = useDispatch();
  const { topStories } = useSelector((state) => state.globalState);

  const handleGetTopStories = async () => {
    try {
      const response = await axiosTopStoriesGetRequest();
      console.log(response);
      dispatch(setTopStories(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    handleGetTopStories();
  }, []);

  return (
    <div className="HomePage">
      <div className="section">
        <h2>Top stories</h2>
        {topStories
          ? topStories.map((data, idx) => {
              return (
                <Card
                  key={idx}
                  source={data.publisher.name}
                  title={data.headline}
                  description={data.summary}
                  time={data.createdAt}
                  url={data.link}
                  imageUrl={data.imageUrl}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}

export default HomePage;
