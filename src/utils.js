import React from "react";

export class Player extends React.Component {
  render() {
    return (
      <iframe
        title="sc-player"
        width="100%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${this.props.soundcloudID}`}
      ></iframe>
    );
  }
}

export const MOONS = [
  {
    emoji: "🌑",
    phase: 1,
    desc: "A new moon, the first of the eight phases of the moon."
  },
  {
    emoji: "🌒",
    phase: 2,
    desc:
      "A waxing crescent moon (appearing to become larger)."
  },
  {
    emoji: "🌓",
    phase: 3,
    desc: "A first quarter moon, the third of the eight phases of the moon."
  },
  {
    emoji: "🌔",
    phase: 4,
    text: "A waxing gibbous moon (appearing more than half full and getting larger), the fourth phase."
  },
  {
    emoji: "🌕",
    phase: 5,
    desc:
      "A full moon, when it is completely lit! Phase 5"
  },
  {
    emoji: "🌖",
    phase: 6,
    desc:
      "A waning gibbous moon  (more than half full but dimming)."
  },
  {
    emoji: "🌗",
    phase: 7,
    desc: "A last quarter moon, the seventh of the eight phases of the moon."
  },
  {
    emoji: "🌘",
    phase: 8,
    desc:
      "A waning crescent moon (appearing to become smaller), the last of the phases of the moon."
  }
]
