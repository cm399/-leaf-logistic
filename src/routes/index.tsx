import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { TopNewsPage } from "pages/TopNewsPage";
import { CategoriesPage } from "pages/CategoriesPage";
import { SearchPage } from "pages/SearchPage";
import MainLayout from "components/Layouts/MainLayout";
import NewsDetail from "pages/NewsDetail";
//-----------------------|| ROUTING RENDER ||-----------------------//

const Routes = () => {
  return (
    <>
      <Helmet titleTemplate={`%s - ABC News`} defaultTitle={"ABC News"}>
        <meta name="description" content={"ABC News"} />
        {/* <link rel="icon" href={} /> */}
        {/* <link rel="apple-touch-icon" href={} /> */}
      </Helmet>
      <Switch>
        <MainLayout>
          <Route exact path="/" component={TopNewsPage} />
          <Route exact path="/caegories" component={CategoriesPage} />
          <Route exact path="/newsDetail" component={NewsDetail} />
          <Route exact path="/search" component={SearchPage} />
        </MainLayout>
      </Switch>
    </>
  );
};

export default Routes;
