import React from 'react'
import { GitHubCalendar } from 'react-github-calendar'

function GitHubActivity({ lang = 'de', theme = 'dark' }) {
  const username = 'artjomartur'

  // Theming for react-github-calendar depending on app theme
  const explicitTheme = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
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
    </div>
  )
}

export default GitHubActivity
