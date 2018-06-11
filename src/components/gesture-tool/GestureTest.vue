<template lang="pug">
  svg(width="100vw", height="100vh")
</template>

<script>
  import * as lfo from 'waves-lfo/common'
  import { PhraseRecorderLfo, XmmDecoderLfo } from 'xmm-lfo'
  import FeaturizerLfo from './FeaturizerLfo'
  // import motionInput from '@ircam/motion-input'

  export default {
    name: 'GestureTest',
    mounted () {
      window.addEventListener('devicemotion', (event) => {
        console.log(event)
      })

      const devicemotionIn = new lfo.source.EventIn({
        frameType: 'vector',
        frameSize: 6,
        frameRate: 1,
        description: ['accX', 'accY', 'accZ', 'gyrAlpha', 'gyrBeta', 'gyrGamma']
      })
      const featurizer = new FeaturizerLfo({
        descriptors: [ 'accIntensity' ],
        callback: function () {
          console.log(arguments)
        }
      })
      const phraseRecorder = new PhraseRecorderLfo({
        columnNames: ['accelGravX', 'accelGravY', 'accelGravZ',
          'rotAlpha', 'rotBeta', 'rotGamma']
      })
      const xmmDecoder = new XmmDecoderLfo({
        likelihoodWindow: 20,
        callback: this._onModelFilter
      })

      devicemotionIn.connect(featurizer)
      devicemotionIn.connect(phraseRecorder)
      devicemotionIn.connect(xmmDecoder)
      devicemotionIn.start()
    }
  }
</script>

<style scoped lang="stylus">

</style>
