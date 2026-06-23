import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TECH_CARDS = [
  { symbol: '⚛️', name: 'React' },
  { symbol: '🌐', name: 'JavaScript' },
  { symbol: '🐍', name: 'Python' },
  { symbol: '🎨', name: 'CSS3' },
  { symbol: '🗄️', name: 'SQL' },
  { symbol: '🐙', name: 'Git' }
]

function TechMemoryEasterEgg({ onClose, lang = 'de' }) {
  const [cards, setCards] = useState([])
  const [selected, setSelected] = useState([])
  const [moves, setMoves] = useState(0)
  const [matches, setMatches] = useState([])
  const [isWon, setIsWon] = useState(false)

  // Initialize and shuffle cards
  const initializeGame = () => {
    const doubleCards = [...TECH_CARDS, ...TECH_CARDS].map((card, index) => ({
      id: index,
      symbol: card.symbol,
      name: card.name,
      isFlipped: false,
      isMatched: false
    }))
    
    // Fisher-Yates Shuffle
    for (let i = doubleCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [doubleCards[i], doubleCards[j]] = [doubleCards[j], doubleCards[i]]
    }

    setCards(doubleCards)
    setSelected([])
    setMoves(0)
    setMatches([])
    setIsWon(false)
  }

  useEffect(() => {
    initializeGame()
  }, [])

  const handleCardClick = (card) => {
    // Prevent clicking if card is already flipped, matched, or 2 cards are already selected
    if (card.isFlipped || card.isMatched || selected.length === 2) return

    // Flip clicked card
    const updatedCards = cards.map((c) => 
      c.id === card.id ? { ...c, isFlipped: true } : c
    )
    setCards(updatedCards)

    const newSelected = [...selected, card]
    setSelected(newSelected)

    // If we have 2 selected cards, check for match
    if (newSelected.length === 2) {
      setMoves((m) => m + 1)
      const [first, second] = newSelected

      if (first.name === second.name) {
        // Match found
        setTimeout(() => {
          setCards((prevCards) => 
            prevCards.map((c) => 
              c.name === first.name ? { ...c, isMatched: true } : c
            )
          )
          setMatches((prev) => {
            const next = [...prev, first.name]
            if (next.length === TECH_CARDS.length) {
              setIsWon(true)
            }
            return next
          })
          setSelected([])
        }, 500)
      } else {
        // No match: Flip cards back over after 1 second
        setTimeout(() => {
          setCards((prevCards) => 
            prevCards.map((c) => 
              c.id === first.id || c.id === second.id 
                ? { ...c, isFlipped: false } 
                : c
            )
          )
          setSelected([])
        }, 1000)
      }
    }
  }

  return (
    <div className="memory-backdrop">
      <motion.div 
        className="memory-modal"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <div className="memory-header">
          <h2>🧠 Tech Stack Memory</h2>
          <div className="memory-stats">
            <span>{lang === 'de' ? 'Züge' : 'Moves'}: <strong>{moves}</strong></span>
            <span>{lang === 'de' ? 'Paare' : 'Pairs'}: <strong>{matches.length} / {TECH_CARDS.length}</strong></span>
          </div>
        </div>

        <div className="memory-grid">
          {cards.map((card) => {
            const showFace = card.isFlipped || card.isMatched
            return (
              <div
                key={card.id}
                className={`memory-card ${showFace ? 'memory-card--flipped' : ''} ${card.isMatched ? 'memory-card--matched' : ''}`}
                onClick={() => handleCardClick(card)}
              >
                <div className="memory-card-inner">
                  <div className="memory-card-front">
                    <span>?</span>
                  </div>
                  <div className="memory-card-back">
                    <span className="memory-card-emoji">{card.symbol}</span>
                    <span className="memory-card-name">{card.name}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <AnimatePresence>
          {isWon && (
            <motion.div 
              className="memory-win-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div 
                className="memory-win-content"
                initial={{ y: 20, scale: 0.9 }}
                animate={{ y: 0, scale: 1 }}
              >
                <h3>🎉 {lang === 'de' ? 'Geschafft!' : 'Congratulations!'}</h3>
                <p>
                  {lang === 'de' 
                    ? `Du hast alle Paare in ${moves} Zügen gefunden.` 
                    : `You found all pairs in ${moves} moves.`}
                </p>
                <div className="memory-win-buttons">
                  <button className="btn btn-primary" onClick={initializeGame}>
                    {lang === 'de' ? 'Nochmal spielen' : 'Play Again'}
                  </button>
                  <button className="btn btn-secondary" onClick={onClose}>
                    {lang === 'de' ? 'Schließen' : 'Close'}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <button className="btn btn-secondary memory-close-btn" onClick={onClose}>
          {lang === 'de' ? 'Spiel beenden' : 'End Game'}
        </button>
      </motion.div>
    </div>
  )
}

export default TechMemoryEasterEgg
