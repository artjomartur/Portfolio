// Zero-dependency native WebAudio API UI sounds

const audioCtx = new (window.AudioContext || window.webkitAudioContext)()

export const playClickSound = () => {
  if (audioCtx.state === 'suspended') audioCtx.resume()
  
  const osc = audioCtx.createOscillator()
  const gainNode = audioCtx.createGain()
  
  osc.type = 'sine'
  osc.frequency.setValueAtTime(800, audioCtx.currentTime)
  osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.05)
  
  gainNode.gain.setValueAtTime(0, audioCtx.currentTime)
  gainNode.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 0.01)
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05)
  
  osc.connect(gainNode)
  gainNode.connect(audioCtx.destination)
  
  osc.start()
  osc.stop(audioCtx.currentTime + 0.05)
}

export const playSuccessSound = () => {
  if (audioCtx.state === 'suspended') audioCtx.resume()
  
  // Two quick cheerful beeps
  const playTone = (freq, startTime, duration) => {
    const osc = audioCtx.createOscillator()
    const gainNode = audioCtx.createGain()
    osc.type = 'sine'
    osc.frequency.value = freq
    
    gainNode.gain.setValueAtTime(0, startTime)
    gainNode.gain.linearRampToValueAtTime(0.1, startTime + 0.02)
    gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration)
    
    osc.connect(gainNode)
    gainNode.connect(audioCtx.destination)
    osc.start(startTime)
    osc.stop(startTime + duration)
  }
  
  const now = audioCtx.currentTime
  playTone(800, now, 0.1) // First beep
  playTone(1200, now + 0.1, 0.2) // Higher beep
}

export const playHoverSound = () => {
  if (audioCtx.state === 'suspended') audioCtx.resume()
  
  const osc = audioCtx.createOscillator()
  const gainNode = audioCtx.createGain()
  
  osc.type = 'sine'
  osc.frequency.setValueAtTime(300, audioCtx.currentTime)
  
  gainNode.gain.setValueAtTime(0, audioCtx.currentTime)
  gainNode.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.01)
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.03)
  
  osc.connect(gainNode)
  gainNode.connect(audioCtx.destination)
  
  osc.start()
  osc.stop(audioCtx.currentTime + 0.03)
}
