import React, { useState, useEffect, useRef } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,!?@#%&*+-='

function SplitFlapText({ text, speed = 25, delay = 2 }) {
  const [displayedText, setDisplayedText] = useState(text)
  const prevTextRef = useRef(text)

  useEffect(() => {
    const targetText = text
    const startText = prevTextRef.current
    prevTextRef.current = targetText

    const maxLength = Math.max(startText.length, targetText.length)
    let currentIteration = 0
    
    // Create padded versions so we animate transitions cleanly between different lengths
    let paddedStart = startText.padEnd(maxLength, ' ')
    let paddedTarget = targetText.padEnd(maxLength, ' ')

    const interval = setInterval(() => {
      let result = ''
      let allDone = true

      for (let i = 0; i < maxLength; i++) {
        const targetChar = paddedTarget[i]
        const currentChar = paddedStart[i]

        if (currentIteration < i * delay) {
          // Stagger has not reached this character position yet, show current
          result += currentChar
          allDone = false
        } else if (currentChar === targetChar) {
          // Characters are identical, no need to animate
          result += targetChar
        } else {
          // Calculate if we reached the max cycles for this character position (e.g. 8 steps)
          if (currentIteration >= i * delay + 8) {
            result += targetChar
          } else {
            // Draw a random character while scrambling
            const randChar = CHARS[Math.floor(Math.random() * CHARS.length)]
            result += randChar
            allDone = false
          }
        }
      }

      setDisplayedText(result)

      if (allDone) {
        clearInterval(interval)
        // Clean up trailing/leading spaces to match exact targetText
        setDisplayedText(targetText)
      }

      currentIteration++
    }, speed)

    return () => clearInterval(interval)
  }, [text])

  return <span>{displayedText}</span>
}

export default SplitFlapText
