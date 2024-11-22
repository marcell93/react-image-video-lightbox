# React image & video viewer

React Image Video Lightbox is a lightweight and customizable React component that provides a modern and responsive lightbox for displaying images and youtube or mp4 videos. It supports easy navigation, full-screen previews, and offers a seamless user experience for showcasing media content. This library is ideal for galleries, portfolios, and any project requiring media presentation with minimal effort. Compatible with modern React versions and fully responsive across devices.

## [View demo](https://marcell93.github.io/react-image-video-lightbox)

## [Marcell Calero - Linkedin](https://www.linkedin.com/in/marcell-calero)

## Installation

```npm
npm install react-image-video-viewer
```

## Usage

```javascript
<ReactImageVideoviewer
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
  onCloseCallback={this.callbackFunction}
  onNavigationCallback={(currentIndex) =>
    console.log(`Current index: ${currentIndex}`)
  }
/>
```

## Properties

| Property             | Type                           | Description                                              |
| -------------------- | ------------------------------ | -------------------------------------------------------- |
| data                 | Array of resources             | An array of resource objects (see resource object below) |
| startIndex           | number                         | Index of image/video where the viewer should open      |
| showResourceCount    | boolean                        | Show resource count in the upper left corner             |
| onCloseCallback      | Function => void               | Callback function called when the viewer is closed     |
| onNavigationCallback | Function(currentIndex) => void | Callback function called on navigation between resources |

## Resource Object

| Property | Type   | Description                                                                                |
| -------- | ------ | ------------------------------------------------------------------------------------------ |
| url      | string | Url of the image/video                                                                     |
| type     | string | Two types are supported - 'photo' & 'video' (only .mp4, .mov and YouTube videos are supported)            |
| altTag   | string | Alt tag for image                                                                          |
| title    | string | Title for iframe when rendering YouTube, .mp4 or .mov video                                              |
| poster    | string | Poster image for .mp4 or .mov video                                              |
| autoPlay    | boolean | Autoplay video for .mp4 or .mov video                                              |
