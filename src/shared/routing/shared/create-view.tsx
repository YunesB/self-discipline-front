import type { FunctionComponent } from "react";

import type { RouteInstance } from "atomic-router";
import { createRouteView } from "atomic-router-react";

import { PageLoader } from "@/shared/ui/atoms";

type TArgs = {
  route: RouteInstance<any>;
  view: FunctionComponent<{}>;
};

export const createView = ({ route, view: View }: TArgs) =>
  createRouteView({
    view: () => <View />,
    otherwise: () => <PageLoader />,
    route,
  });
