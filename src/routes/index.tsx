import { ThemeProvider } from "@/components/providers/theme-providers"
import Home from "@/pages/home"
import Login from "@/pages/login"
import Register from "@/pages/register"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

function Router() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
  ])

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default Router
