import { Main } from "../index";
import Todo from "../TodoList";
import { Content } from "../content";
import { Cart } from "../cart";
import { Auth } from "../Auth";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <Auth />,
    // children: [
    //   {
    //     path: "auth",
    //     element: <Auth />,
    //   },
    // ],
  },
  {
    path: "/todo",
    element: (
      <Todo
        items={[]}
        onDelete={function (id: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    ),
  },
  {
    path: "/content",
    element: <Content data={undefined} />,
  },
  {
    path: "/cart",
    element: <Cart id={0} price={0} count={""} item={undefined} />,
  },
  {
    path: "auth",
    element: <Auth />,
  },
]);

export default routes;
