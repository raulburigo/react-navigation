import { type DefaultNavigatorOptions, type DrawerNavigationState, type DrawerRouterOptions, type ParamListBase } from '@react-navigation/native';
import * as React from 'react';
import type { DrawerNavigationConfig, DrawerNavigationEventMap, DrawerNavigationOptions } from '../types';
type Props = DefaultNavigatorOptions<ParamListBase, DrawerNavigationState<ParamListBase>, DrawerNavigationOptions, DrawerNavigationEventMap> & DrawerRouterOptions & DrawerNavigationConfig;
declare function DrawerNavigator({ id, initialRouteName, defaultStatus, backBehavior, children, layout, screenListeners, screenOptions, ...rest }: Props): React.JSX.Element;
export declare const createDrawerNavigator: {
    <ParamList extends ParamListBase>(): import("@react-navigation/native").TypedNavigator<ParamList, DrawerNavigationState<ParamListBase>, DrawerNavigationOptions, DrawerNavigationEventMap, typeof DrawerNavigator>;
    <ParamList_1 extends ParamListBase, Config extends import("@react-navigation/core/lib/typescript/src/StaticNavigation").StaticConfig<ParamList_1, DrawerNavigationState<ParamListBase>, DrawerNavigationOptions, DrawerNavigationEventMap, typeof DrawerNavigator>>(config: Config): import("@react-navigation/native").TypedNavigator<ParamList_1, DrawerNavigationState<ParamListBase>, DrawerNavigationOptions, DrawerNavigationEventMap, typeof DrawerNavigator> & {
        config: Config;
    };
};
export {};
//# sourceMappingURL=createDrawerNavigator.d.ts.map