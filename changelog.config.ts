export default () => ({
  types: {
    feat: { title: '✨ Enhancements', semver: 'minor' },
    perf: { title: '⚡ Performance', semver: 'patch' },  
    fix: { title: '🐛 Fixes', semver: 'patch' },          
    examples: { title: '📚 Examples' },                     
    docs: { title: '📝 Documentation', semver: 'patch' },
    types: { title: '🔧 Types', semver: 'patch' },
    refactor: false,
    build: false,
    chore: false,
    test: false,
    style: false,
    ci: false
  }
})
