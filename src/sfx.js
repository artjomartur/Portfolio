// Web Audio API Sound Effects Synthesizer

let audioCtx = null

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume()
  }
  return audioCtx
}

export const sfx = {
  playPop: (volume = 0.12) => {
    try {
      const ctx = getAudioContext()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'sine'
      // High pitch pop sound
      const baseFreq = 800 + Math.random() * 400
      osc.frequency.setValueAtTime(baseFreq, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.1)

      gain.gain.setValueAtTime(volume, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start()
      osc.stop(ctx.currentTime + 0.1)
    } catch (e) {
      console.warn('Audio play failed', e)
    }
  },

  playLaser: () => {
    try {
      const ctx = getAudioContext()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'sawtooth'
      osc.frequency.setValueAtTime(900, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.18)

      // Low pass filter to make it warmer
      const filter = ctx.createBiquadFilter()
      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(1000, ctx.currentTime)

      gain.gain.setValueAtTime(0.08, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18)

      osc.connect(filter)
      filter.connect(gain)
      gain.connect(ctx.destination)

      osc.start()
      osc.stop(ctx.currentTime + 0.18)
    } catch (e) {
      console.warn('Audio play failed', e)
    }
  },

  playExplosion: () => {
    try {
      const ctx = getAudioContext()
      // Generate noise buffer
      const bufferSize = ctx.sampleRate * 0.35 // 0.35s
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
      const data = buffer.getChannelData(0)
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1
      }

      const noise = ctx.createBufferSource()
      noise.buffer = buffer

      // Filter to make it a rumble/explosion
      const filter = ctx.createBiquadFilter()
      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(800, ctx.currentTime)
      filter.frequency.exponentialRampToValueAtTime(10, ctx.currentTime + 0.35)

      const gain = ctx.createGain()
      gain.gain.setValueAtTime(0.18, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35)

      noise.connect(filter)
      filter.connect(gain)
      gain.connect(ctx.destination)

      noise.start()
      noise.stop(ctx.currentTime + 0.35)
    } catch (e) {
      console.warn('Audio play failed', e)
    }
  },

  playPongBounce: () => {
    try {
      const ctx = getAudioContext()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'triangle'
      osc.frequency.setValueAtTime(320, ctx.currentTime)
      osc.frequency.setValueAtTime(380, ctx.currentTime + 0.05)

      gain.gain.setValueAtTime(0.1, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start()
      osc.stop(ctx.currentTime + 0.12)
    } catch (e) {
      console.warn('Audio play failed', e)
    }
  },

  playOsuHit: () => {
    try {
      const ctx = getAudioContext()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'sine'
      osc.frequency.setValueAtTime(1200, ctx.currentTime)

      gain.gain.setValueAtTime(0.15, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25)

      // Simple delay effect to sound spacious
      const delay = ctx.createDelay()
      delay.delayTime.value = 0.08

      const delayGain = ctx.createGain()
      delayGain.gain.value = 0.35

      osc.connect(gain)
      gain.connect(ctx.destination)

      // Feed delay back
      gain.connect(delay)
      delay.connect(delayGain)
      delayGain.connect(ctx.destination)

      osc.start()
      osc.stop(ctx.currentTime + 0.25)
    } catch (e) {
      console.warn('Audio play failed', e)
    }
  },

  playOsuMiss: () => {
    try {
      const ctx = getAudioContext()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'sawtooth'
      osc.frequency.setValueAtTime(200, ctx.currentTime)
      osc.frequency.linearRampToValueAtTime(130, ctx.currentTime + 0.15)

      const filter = ctx.createBiquadFilter()
      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(300, ctx.currentTime)

      gain.gain.setValueAtTime(0.1, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15)

      osc.connect(filter)
      filter.connect(gain)
      gain.connect(ctx.destination)

      osc.start()
      osc.stop(ctx.currentTime + 0.15)
    } catch (e) {
      console.warn('Audio play failed', e)
    }
  },

  playScoreUp: () => {
    try {
      const ctx = getAudioContext()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'sine'
      osc.frequency.setValueAtTime(600, ctx.currentTime)
      osc.frequency.setValueAtTime(900, ctx.currentTime + 0.08)

      gain.gain.setValueAtTime(0.08, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start()
      osc.stop(ctx.currentTime + 0.25)
    } catch (e) {
      console.warn('Audio play failed', e)
    }
  },

  playPortfolioOpen: () => {
    try {
      const ctx = getAudioContext()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'sine'
      osc.frequency.setValueAtTime(800, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.08)

      gain.gain.setValueAtTime(0.05, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start()
      osc.stop(ctx.currentTime + 0.08)
    } catch (e) {
      console.warn('Audio play failed', e)
    }
  },

  playKinopolisOpen: () => {
    try {
      const ctx = getAudioContext()
      const now = ctx.currentTime
      const osc1 = ctx.createOscillator()
      const osc2 = ctx.createOscillator()
      const gain = ctx.createGain()

      osc1.type = 'triangle'
      osc1.frequency.setValueAtTime(110, now)
      osc1.frequency.linearRampToValueAtTime(220, now + 0.4)

      osc2.type = 'sine'
      osc2.frequency.setValueAtTime(330, now)
      osc2.frequency.linearRampToValueAtTime(440, now + 0.4)

      gain.gain.setValueAtTime(0.01, now)
      gain.gain.linearRampToValueAtTime(0.06, now + 0.15)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45)

      osc1.connect(gain)
      osc2.connect(gain)
      gain.connect(ctx.destination)

      osc1.start()
      osc2.start()
      osc1.stop(now + 0.45)
      osc2.stop(now + 0.45)
    } catch (e) {
      console.warn('Audio play failed', e)
    }
  },

  playExerCubeOpen: () => {
    try {
      const ctx = getAudioContext()
      const now = ctx.currentTime
      const notes = [261.63, 329.63, 392.00, 523.25] // C4, E4, G4, C5
      notes.forEach((freq, index) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = 'sine'
        osc.frequency.setValueAtTime(freq, now + index * 0.07)
        gain.gain.setValueAtTime(0.04, now + index * 0.07)
        gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.07 + 0.15)
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.start(now + index * 0.07)
        osc.stop(now + index * 0.07 + 0.15)
      })
    } catch (e) {
      console.warn('Audio play failed', e)
    }
  },

  playArcadeSuiteOpen: () => {
    try {
      const ctx = getAudioContext()
      const now = ctx.currentTime
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'square'
      osc.frequency.setValueAtTime(987.77, now)
      osc.frequency.setValueAtTime(1318.51, now + 0.06)

      gain.gain.setValueAtTime(0.025, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2)

      const filter = ctx.createBiquadFilter()
      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(1600, now)

      osc.connect(filter)
      filter.connect(gain)
      gain.connect(ctx.destination)

      osc.start()
      osc.stop(now + 0.2)
    } catch (e) {
      console.warn('Audio play failed', e)
    }
  },

  playFirstAidOpen: () => {
    try {
      const ctx = getAudioContext()
      const now = ctx.currentTime

      const playThump = (delay) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = 'sine'
        osc.frequency.setValueAtTime(55, now + delay)
        osc.frequency.exponentialRampToValueAtTime(20, now + delay + 0.14)

        gain.gain.setValueAtTime(0.18, now + delay)
        gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.14)

        osc.connect(gain)
        gain.connect(ctx.destination)

        osc.start(now + delay)
        osc.stop(now + delay + 0.14)
      }

      playThump(0)
      playThump(0.16)
    } catch (e) {
      console.warn('Audio play failed', e)
    }
  },

  playAcademicOpen: () => {
    try {
      const ctx = getAudioContext()
      const now = ctx.currentTime
      const freqs = [329.63, 392.00, 493.88, 587.33] // Em7 chord: E4, G4, B4, D5

      freqs.forEach((freq) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = 'sine'
        osc.frequency.setValueAtTime(freq, now)

        gain.gain.setValueAtTime(0.025, now)
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45)

        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.start()
        osc.stop(now + 0.45)
      })
    } catch (e) {
      console.warn('Audio play failed', e)
    }
  },

  playSkinStockOpen: () => {
    try {
      const ctx = getAudioContext()
      const now = ctx.currentTime
      
      const playTone = (freq, duration, delay, type = 'sine') => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = type
        osc.frequency.setValueAtTime(freq, now + delay)
        
        gain.gain.setValueAtTime(0.04, now + delay)
        gain.gain.exponentialRampToValueAtTime(0.001, now + delay + duration)
        
        osc.connect(gain)
        gain.connect(ctx.destination)
        
        osc.start(now + delay)
        osc.stop(now + delay + duration)
      }
      
      // Coin ring/cha-ching sound
      playTone(987.77, 0.08, 0, 'sine') // B5
      playTone(1318.51, 0.25, 0.06, 'sine') // E6
      playTone(1567.98, 0.3, 0.12, 'sine') // G6
    } catch (e) {
      console.warn('Audio play failed', e)
    }
  },

  playFlashbang: () => {
    try {
      const ctx = getAudioContext()
      const now = ctx.currentTime

      // 1. Flashbang Explosion (filtered noise + low pop)
      const bufferSize = ctx.sampleRate * 0.4
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
      const data = buffer.getChannelData(0)
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1
      }
      const noise = ctx.createBufferSource()
      noise.buffer = buffer

      const noiseFilter = ctx.createBiquadFilter()
      noiseFilter.type = 'bandpass'
      noiseFilter.frequency.setValueAtTime(300, now)
      noiseFilter.Q.value = 1.0

      const noiseGain = ctx.createGain()
      noiseGain.gain.setValueAtTime(0.12, now)
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35)

      noise.connect(noiseFilter)
      noiseFilter.connect(noiseGain)
      noiseGain.connect(ctx.destination)
      noise.start(now)
      noise.stop(now + 0.4)

      // 2. High-pitched ringing (sine wave at 5500Hz)
      const osc = ctx.createOscillator()
      const ringGain = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(5500, now)
      
      ringGain.gain.setValueAtTime(0.04, now)
      ringGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5)

      osc.connect(ringGain)
      ringGain.connect(ctx.destination)
      
      osc.start(now)
      osc.stop(now + 2.5)
    } catch (e) {
      console.warn('Audio play failed', e)
    }
  },

  playProjectOpen: (projectId) => {
    switch (projectId) {
      case 'kinopolis-automation':
        sfx.playKinopolisOpen()
        break
      case 'exercube':
        sfx.playExerCubeOpen()
        break
      case 'arcadesuite':
        sfx.playArcadeSuiteOpen()
        break
      case 'portfolio':
        sfx.playPortfolioOpen()
        break
      case 'first-aid-simulator':
        sfx.playFirstAidOpen()
        break
      case 'skinstock':
        sfx.playFlashbang()
        break
      default:
        sfx.playAcademicOpen()
        break
    }
  }
}
