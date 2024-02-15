const titleMap = {
  login: 'Login',
  signup: 'Sign Up'
}

function useRouteTitle(pathName) {
  for (const path in titleMap) {
    if (pathName.includes(path)) return titleMap[path]
  }
  return ''
}

export default useRouteTitle
