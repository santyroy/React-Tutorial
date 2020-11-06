import React from "react";
import { Grid } from "@material-ui/core/";

import youtube from "./api/youtube";

import { SearchBar, VideoList, VideoDetails } from "./components";

import { ReactComponent as Banner } from "./images/Logo_of_YouTube.svg";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.handleSubmit("");
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", { params: { q: searchTerm } });
    console.log(response.data.items);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    const { selectedVideo, videos } = this.state;

    return (
      <div>
        <Banner
          style={{ width: "100%", height: "80px", marginBottom: "10px" }}
        />
        <Grid container spacing={10} justify="center">
          <Grid item xs={11}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <SearchBar onFormSubmit={this.handleSubmit} />
              </Grid>
              <Grid item xs={8}>
                <VideoDetails video={selectedVideo} />
              </Grid>
              <Grid item xs={4}>
                <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
