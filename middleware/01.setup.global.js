export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log('--- Setup Global Middleware ---')
  if (to.path === '/login') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Oh snap, it broke!'
    })
  }
  // return abortNavigation('Failed at global Middleware')
  // try {
  //   const data = await fetch('api/this-path')
  //   return navigateTo('/profile' + data.user.name)
  // } catch (error) {
  //   return abortNavigation(error)
  // }
})
