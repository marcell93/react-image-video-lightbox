import React, { Component } from "react";
import { render } from "react-dom";

import ReactImageVideoLightbox from "../../src";

export default class Demo extends Component {
  state = {
    lightboxOpen: false,
  };

  render() {
    return (
      <div
        style={{
          fontFamily: "sans-serif",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          React image &amp; video lightbox demo
        </h1>
        <h3 style={{ textAlign: "center" }}>
          Click the button to view the lightbox
        </h3>
        <div>
          <button
            style={{
              padding: 20,
              border: "none",
              borderRadius: 5,
              backgroundColor: "lightgrey",
            }}
            onClick={() => this.setState({ lightboxOpen: true })}
          >
            Open lightbox
          </button>
        </div>
        {this.state.lightboxOpen && (
          <ReactImageVideoLightbox
            data={[
              {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/800px-Flag_of_Uruguay.svg.png",
                type: "photo",
                altTag: "some image",
              },
              {
                url: "https://www.sample-videos.com/video321/mp4/240/big_buck_bunny_240p_1mb.mp4",
                type: "video",
                title: "Placeholder video",
              },
              {
                url: "https://www.youtube.com/embed/iTjxqWolgHY",
                type: "video",
                title: "some other video",
              },
            ]}
            startIndex={0}
            showResourceCount={true}
            onCloseCallback={() => this.setState({ lightboxOpen: false })}
            onNavigationCallback={(currentIndex) =>
              console.log(`Current index: ${currentIndex}`)
            }
          />
        )}
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
