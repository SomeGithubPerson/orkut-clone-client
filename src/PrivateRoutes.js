import React from 'react'
import './styles/App.css'
import { Wrapper, Container, DrawerMenu } from './styles/layout'

import { Switch, Route } from 'react-router-dom'

import Drawer from './components/Drawer'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import HomeMobile from './pages/HomeMobile'
import ProfileRoute from './pages/ProfileRoute'
import ProfileRouteMobile from './pages/ProfileRouteMobile'
import CommunityRoute from  './pages/CommunityRoute'
import CommunityRouteMobile from './pages/CommunityRouteMobile'
import CreateCommunity from './pages/CreateCommunity'

import Error404 from './pages/404Error'

import ResponsiveLayout from './components/ResponsiveLayout'

const PrivateRoutes = ({ data, logout }) => {
    return (
        <Wrapper>
            <Navbar loggedUser={ data.findUser } logout={ logout } />
            <div id="menu-content-wrapper">
                <Drawer loggedUser={ data.findUser } logout={ logout } />
                <Container id="main-content" main>
                    <Switch>
                        {/* {
                            routes.map(({ path, Component }, key) => (
                                <Route exact path={ path } key={ key } component={props => {
                                    const crumbs = routes
                                        .filter(({ path }) => props.match.path.includes(path))
                                        .map(({ path, ...rest }) => ({
                                            path: Object.keys(props.match.params).length
                                                ? Object.keys(props.match.params).reduce(
                                                    (path, param) => path.replace(
                                                        `:${param}`, props.match.params[param]
                                                    ), path)
                                                : path,
                                            ...rest
                                        }));

                                    return (
                                        <ResponsiveLayout
                                            breakpoint={ 776 }
                                            renderDesktop={ () => (
                                                <Component {...props} loggedUser={ data.findUser } crumbs={ crumbs } />
                                            ) }
                                            renderMobile={ () => (
                                                <h1>Mobile view!</h1>
                                            ) }
                                        />
                                    )
                                }} />
                            ))
                        } */}
                        <Route path="/perfil/:userId">
                            <ResponsiveLayout
                                breakpoint={ 776 }
                                renderDesktop={ () => (
                                    <ProfileRoute loggedUser={data.findUser} />
                                ) }
                                renderMobile={ () => (
                                    <ProfileRouteMobile loggedUser={data.findUser} />
                                ) }
                            />
                        </Route>

                        <Route path="/comunidades/:communityId">
                            <ResponsiveLayout 
                                breakpoint={ 776 }
                                renderDesktop={ () => (
                                    <CommunityRoute loggedUser={data.findUser} />
                                ) }
                                renderMobile={ () => (
                                    <CommunityRouteMobile loggedUser={data.findUser} />
                                ) }
                            />
                        </Route>

                        <Route path="/criar-comunidade">
                            <ResponsiveLayout 
                                breakpoint={ 776 }
                                renderDesktop={ () => (
                                    <CreateCommunity loggedUser={data.findUser} />
                                ) }
                                renderMobile={ () => (
                                    <CreateCommunity loggedUser={data.findUser} mobile={true} />
                                ) }
                            />
                        </Route>

                        <Route exact path="/">
                            <ResponsiveLayout 
                                breakpoint={ 776 }
                                renderDesktop={ () => (
                                    <Home loggedUser={data.findUser} />
                                ) }
                                renderMobile={ () => (
                                    <HomeMobile loggedUser={data.findUser} />
                                ) }
                            />
                        </Route>

                        <Route path="*">
                            <ResponsiveLayout 
                                breakpoint={ 776 }
                                renderDesktop={ () => (
                                    <Error404 />
                                ) }
                                renderMobile={ () => (
                                    <h1>404 Error Mobile</h1>
                                ) }
                            />
                        </Route>
                    </Switch>
                </Container>
            </div>
            <Footer />
        </Wrapper>
    )
}

export default PrivateRoutes