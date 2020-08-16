function linkResolver(doc) {
  console.log('DOC', doc)
  switch (doc.type) {
    case 'page':
      return doc.uid === 'home' ? '/' : `/${doc.uid}`
    case 'article':
      return `/artikelen/${doc.uid}`
    default:
      return `/${doc.uid}`
  }
}

export {
  linkResolver
}
