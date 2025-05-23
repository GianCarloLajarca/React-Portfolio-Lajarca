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
import Banner from "./components/pages/developer/dashboard/banner/Banner"
import Education from "./components/pages/developer/dashboard/education/Education"
import Cta from "./components/pages/developer/dashboard/cta/Cta"
import Welcome from "./components/pages/developer/dashboard/welcome/Welcome"
import Contact from "./components/pages/developer/dashboard/contact/Contact"
import DarkMode from "./components/DarkMode/DarkMode"
import Login from "./components/pages/developer/access/Login"
import ForgotPassword from "./components/pages/developer/access/ForgotPassword"
import CreatePassword from "./components/pages/developer/access/CreatePassword"
import Users from "./components/pages/developer/dashboard/users/Users"
import PageNotFound from "./components/partials/PageNotFound"
import ProtectedRoute from "./components/pages/developer/access/ProtectedRoute"

const App = () => {
  const queryClient = new QueryClient
  return (
    <>
    <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <Router>
                <Routes>
                  <Route path="/*" element={<PageNotFound/>}/>

                  <Route path="/dashboard" element={
                    <ProtectedRoute>
                       <Welcome/>
                    </ProtectedRoute>
                 
                  }/>

                  <Route path="/skill" element={<Skill/>}/>
                  <Route path="/service" element={<Service/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/experience" element={<Experience/>}/>
                  <Route path="/honor" element={<Honor/>}/>
                  <Route path="/top" element={<Top/>}/>
                  <Route path="/certificate" element={<Certificate/>}/>
                  <Route path="/project" element={<Project/>}/>
                  <Route path="/banner" element={<Banner/>}/>
                  <Route path="/education" element={<Education/>}/>
                  <Route path="/cta" element={<Cta/>}/>
                  <Route path="/contact" element={<Contact/>}/>
                  <Route path="/users" element={<Users/>}/>
                  {/* UI */}
                  <Route path="/React-Portfolio-Lajarca/" element={<Home />} />

                  <Route path="/login" element={<Login/>}/>
                  <Route path="/forgot-password" element={<ForgotPassword/>}/>
                  <Route path="/create-password" element={<CreatePassword/>}/>
                </Routes>
          </Router>
        </StoreProvider>
    </QueryClientProvider>
  </>
  )
}

export default App