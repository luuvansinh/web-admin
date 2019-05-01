import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect, routerRedux } from 'dva/router'
import dynamic from 'dva/dynamic'
import { I18nextProvider } from 'react-i18next'
import { AppConst, RoleConst } from './configs'
import { i18n } from './configs/locale'

// Load views
import { LayoutView } from './screens/layout'
import { LoginView, LoginModel } from './screens/login'
import { HomeView, HomeModel } from './public/home'
import { PProductModel, PProductView } from './public/product'

import { UserModel, UserView } from './screens/user/list'
import { ProductModel, ProductView } from './screens/product/list'
import { NewProductModel, NewProductView } from './screens/product/new'
import { CategoryView, CategoryModel } from './screens/category'
import { PromotionListModel, PromotionListView } from './screens/promotion/list'


const { ConnectedRouter } = routerRedux

function Routers({ history, app }) {
  const error = dynamic({
    app,
    component: () => import('./screens/error'),
  })
  const unauthenticatedRoutes = [{
    path: '/',
    models: () => [HomeModel],
    component: () => HomeView,
  }, {
    path: '/login',
    models: () => [LoginModel],
    component: () => LoginView,
  }, {
    path: '/products',
    models: () => [PProductModel],
    component: () => PProductView,
  }]
  // Routes
  const routes = [{
    path: '/users',
    models: () => [UserModel],
    component: () => UserView,
  }, {
    path: '/products',
    models: () => [ProductModel, NewProductModel],
    component: () => ProductView,
  }, {
    path: '/products/:id/update',
    models: () => [NewProductModel],
    component: () => NewProductView,
  }, {
    path: '/products/new',
    models: () => [NewProductModel],
    component: () => NewProductView,
  }, {
    path: '/categories',
    models: () => [CategoryModel],
    component: () => CategoryView,
  }, {
    path: '/promotions',
    models: () => [PromotionListModel],
    component: () => PromotionListView,
  }]
  const role = localStorage.getItem(AppConst.localStorage.roleKey)
  const unauthenticatedComponents = (
    <Switch>
      {
        unauthenticatedRoutes.map(({ path, ...dynamics }) => (
          <Route
            key={path}
            exact
            path={path}
            component={dynamic({
              app,
              ...dynamics,
            })}
          />
        ))
      }
    </Switch>
  )
  return (
    <I18nextProvider i18n={i18n}>
      <ConnectedRouter history={history}>
        <LayoutView unauthenticatedComponents={unauthenticatedComponents}>
          <Switch>
            <Route exact path="/" render={() => (<Redirect to={`/${RoleConst[role || 'admin'].pages[0].id}`} />)} />
            {
              routes.map(({ path, ...dynamics }) => (
                <Route
                  key={path}
                  exact
                  path={path}
                  component={dynamic({
                    app,
                    ...dynamics,
                  })}
                />
              ))
            }
            <Route component={error} />
          </Switch>
        </LayoutView>
      </ConnectedRouter>
    </I18nextProvider>
  )
}

Routers.propTypes = {
  history: PropTypes.object.isRequired,
  app: PropTypes.object.isRequired,
}
export default Routers
