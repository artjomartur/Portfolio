import React, { useState, useEffect } from 'react'
import { GitHubCalendar } from 'react-github-calendar'
import { GitCommit } from 'lucide-react'

function GitHubActivity({ lang = 'de', theme = 'dark' }) {
  const username = 'artjomartur'

  // Theming for react-github-calendar depending on app theme
  const explicitTheme = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  }

  const [commits, setCommits] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/events/public`)
      .then(res => res.json())
      .then(events => {
        const pushEvents = events.filter(e => e.type === 'PushEvent')
        const recentCommits = []
        for (const event of pushEvents) {
          if (event.payload && event.payload.commits) {
            for (const commit of event.payload.commits) {
              recentCommits.push({
                sha: commit.sha,
                message: commit.message.split('\n')[0],
                repo: event.repo.name,
                date: new Date(event.created_at)
              })
              if (recentCommits.length >= 3) break
            }
          }
          if (recentCommits.length >= 3) break
        }
        setCommits(recentCommits)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch commits:', err)
        setLoading(false)
      })
  }, [username])

  const timeAgo = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000)
    let interval = seconds / 86400
    if (interval > 1) return Math.floor(interval) + (lang === 'de' ? ' Tagen' : ' days ago')
    interval = seconds / 3600
    if (interval > 1) return Math.floor(interval) + (lang === 'de' ? ' Std.' : ' hours ago')
    interval = seconds / 60
    if (interval > 1) return Math.floor(interval) + (lang === 'de' ? ' Min.' : ' mins ago')
    return lang === 'de' ? 'Gerade eben' : 'Just now'
  }

  return (
    <div className="github-activity-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <GitHubCalendar
        username={username}
        colorScheme={theme}
        theme={explicitTheme}
        fontSize={14}
        blockSize={12}
        blockMargin={4}
        labels={{
          totalCount: lang === 'de' ? '{{count}} Contributions im letzten Jahr' : '{{count}} contributions in the last year',
        }}
      />
      
      {!loading && commits.length > 0 && (
        <div className="recent-commits" style={{ marginTop: '30px', width: '100%', maxWidth: '600px', textAlign: 'left' }}>
          <h4 style={{ fontSize: '14px', opacity: 0.7, marginBottom: '16px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <GitCommit size={16} /> 
            {lang === 'de' ? 'Letzte Aktivitäten' : 'Recent Activity'}
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {commits.map((commit, i) => (
              <div key={commit.sha} style={{ 
                padding: '12px 16px', 
                background: 'var(--surface)', 
                border: '1px solid var(--border)', 
                borderRadius: '8px',
                fontSize: '13px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div style={{ overflow: 'hidden' }}>
                  <div style={{ fontWeight: 500, color: 'var(--text-primary)', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                    {commit.message}
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '12px', marginTop: '4px' }}>
                    {commit.repo.replace('artjomartur/', '')}
                  </div>
                </div>
                <div style={{ color: 'var(--text-tertiary)', fontSize: '11px', whiteSpace: 'nowrap' }}>
                  {timeAgo(commit.date)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default GitHubActivity
