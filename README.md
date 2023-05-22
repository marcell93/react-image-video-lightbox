# React image & video viewer

## [View demo](https://ngineer101.github.io/react-image-video-lightbox)

## Installation

```npm
npm install react-image-video-viewer
```

## Usage

```javascript
<ReactImageVideoviewer
  data={[
    {
      url: "https://placekitten.com/450/300",
      type: "photo",
      altTag: "some image",
    },
    {
      url: "https://www.youtube.com/embed/ScMzIvxBSi4",
      type: "video",
      title: "some video",
    },
    {
      url: "https://file-examples.com/storage/fea9880a616463cab9f1575/2017/04/file_example_MP4_480_1_5MG.mp4",
      type: "video",
      poster: "posterImg.jpg",
    },
    {
      url: "https://www.youtube.com/embed/ScMzIvxBSi4",
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
