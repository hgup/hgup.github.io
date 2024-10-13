In this 
```ts {18-20}
      if (currentPath === oneStruct.href) allowed = true // USER IS ON MAIN ROUTE
      if (currentPath.startsWith(`${oneStruct.href}/settings`)) allowed = true
      allowed =
        allowed || //? Override if user is on the main route
        oneStruct.children.reduce(
          (allowed_on_child, child) =>
            allowed_on_child ||
            child.routes.reduce(
              (r, route) => {
                console.log(
                  `${oneStruct.href}${child.href}`,
                  exceptions.includes(`${oneStruct.href}${child.href}`)
                )
                return (
                  r ||
                  currentPath.startsWith(
                    `${oneStruct.href}${child.href}${route.href}`
                  ) ||
                  exceptions.includes(`${oneStruct.href}${child.href}`)
                )
              },
              //? Override if user is on the MAIN CHILD ROUTE (e.g. /dept/photocopy)
              currentPath === `${oneStruct.href}${child.href}`
            ),
          false
        )
```

In the code snippet, I added an exceptions list with routes that contains routes that don’t follow the usual pattern of the other routes, he will be allowed to bypass it, but could you identify the problem with this?