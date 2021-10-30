<template>
  <div id="app">
    <h1>Audio Synthesis using code:</h1>
    <br />
    <button v-on:click="singleNote()">
      <h3><b>SINGLE NOTE</b></h3>
    </button>
    <br />
    <br />
    <br />
    <button v-on:click="pianoChord()">
      <h3><b>PIANO CHORD</b></h3>
    </button>
    <br />
    <br />
    <br />
    <button v-on:click="synthScale()">
      <h3><b>SYNTH SCALE</b></h3>
    </button>
    <br />
    <br />
    <br />
    <button v-on:click="bassDrop()">
      <h3><b>BASS DROP</b></h3>
    </button>
    <br />
    <br />
    <br />
    <button v-on:click="spookySound()">
      <h3><b>SPOOKY SOUND</b></h3>
    </button>
  </div>
</template>

<style>
body {
  background-color: #000000;
}
h1 {
  color: #ffffff;
}
</style>

<script>
import * as Tone from "tone";

export default {
  data: function () {
    return {};
  },
  created: function () {},
  methods: {
    singleNote: function () {
      const synth = new Tone.Synth().toDestination();
      synth.triggerAttackRelease("C4", "8n");
    },
    bassDrop: function () {
      const osc = new Tone.Oscillator().toDestination();
      osc.frequency.value = "C4";
      osc.frequency.rampTo("C2", 2);
      osc.start().stop("+3");
    },
    pianoChord: function () {
      const sampler = new Tone.Sampler({
        urls: {
          C4: "C4.mp3",
          "D#4": "Ds4.mp3",
          "F#4": "Fs4.mp3",
          A4: "A4.mp3",
        },
        release: 1,
        baseUrl: "https://tonejs.github.io/audio/salamander/",
      }).toDestination();

      Tone.loaded().then(() => {
        sampler.triggerAttackRelease(["Eb4", "G4", "Bb4"], 4);
      });
    },
    synthScale: function () {
      const synth = new Tone.Synth().toDestination();
      const now = Tone.now();
      synth.triggerAttackRelease("C4", "8n", now);
      synth.triggerAttackRelease("E4", "8n", now + 0.25);
      synth.triggerAttackRelease("G4", "8n", now + 0.5);
      synth.triggerAttackRelease("B4", "8n", now + 0.75);
      synth.triggerAttackRelease("D5", "8n", now + 1);
      synth.triggerAttackRelease("B4", "8n", now + 1.25);
      synth.triggerAttackRelease("G4", "8n", now + 1.5);
      synth.triggerAttackRelease("E4", "8n", now + 1.75);
      synth.triggerAttackRelease("C4", "8n", now + 2);
    },
    spookySound: function () {
      const player = new Tone.Player({
        url: "https://tonejs.github.io/audio/berklee/gurgling_theremin_1.mp3",
        loop: false,
        autostart: true,
      });
      const distortion = new Tone.Distortion(0.4).toDestination();
      player.connect(distortion);
    },
  },
};
</script>
