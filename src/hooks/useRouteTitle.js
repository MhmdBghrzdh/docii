const titleMap = {
  login: 'Login',
  signup: 'Sign Up',
  'top-doctors': 'Top Doctors'
}

function useRouteTitle(pathName) {
  for (const path in titleMap) {
    if (pathName.includes(path)) return titleMap[path]
  }
  return ''
}

export default useRouteTitle
