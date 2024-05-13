import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Skill from "./components/pages/developer/dashboard/skill/Skill"
import Home from "./components/pages/developer/ui/Home"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { StoreProvider } from "./store/StoreContext"
import Service from "./components/pages/developer/dashboard/service/Service"
import About from "./components/pages/developer/dashboard/about/About"
import Experience from "./components/pages/developer/dashboard/experience/Experience"
import Honor from "./components/pages/developer/dashboard/honor/Honor"
import Top from "./components/pages/developer/dashboard/top/Top"
import Certificate from "./components/pages/developer/dashboard/certificate/Certificate"
import Project from "./components/pages/developer/dashboard/project/Project"

const App = () => {
  const queryClient = new QueryClient
  return (
    <>
    <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <Router>
                <Routes>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="/skill" element={<Skill/>}/>
                  <Route path="/service" element={<Service/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/experience" element={<Experience/>}/>
                  <Route path="/honor" element={<Honor/>}/>
                  <Route path="/top" element={<Top/>}/>
                  <Route path="/certificate" element={<Certificate/>}/>
                  <Route path="/project" element={<Project/>}/>
                </Routes>
          </Router>
        </StoreProvider>
    </QueryClientProvider>
  </>
  )
}

export default App