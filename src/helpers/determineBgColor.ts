export const determineBgColor = (color: string): string => {
  switch (color) {
    case '#0F172A':
      return '#1E293B'
    case '#111827':
      return '#1F2937'
    case '#18181B':
      return '#27272A'
    case '#171717':
      return '#262626'
    case '#1C1917':
      return '#292524'
    default:
      return color
  }
}