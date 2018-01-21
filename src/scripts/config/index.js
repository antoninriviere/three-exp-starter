import { GlitchPass } from 'postprocessing'

export default {
  debug: {
    stats: true,
    orbitControls: true
  },
  postProcessing: {
    active: true,
    passes: [
      {
        name: 'glitchPass',
        active: true,
        constructor: () => {
          return new GlitchPass({})
        }
      }
    ]
  }
}