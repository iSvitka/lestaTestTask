import { IFilterReducerState, IFilterReducerAction } from "@/components/ShipsPage/ShipsPage.typings";

export const filtersReducerFunc = (state: IFilterReducerState, action: IFilterReducerAction) => {
    switch(action.type) {
        case 'addNationFilter':
            return {
                ...state,
                nation: [...state.nation, action.filter]
            };
        case 'addLevelFilter':
            return {
                ...state,
                level: [...state.level, action.filter]
            };
        case 'addTypeFilter':
            return {
                ...state,
                type: [...state.type, action.filter]
            };
        case 'removeNationFilter':
            if(state.nation.length === 1) {
                return {
                    ...state,
                    nation: [],
                }
            }
            return {
                ...state,
                nation: [...state.nation.filter(elem => elem !== action.filter)]
            };
        case 'removeLevelFilter':
            if(state.level.length === 1) {
                return {
                    ...state,
                    level: [],
                }
            }
            return {
                ...state,
                level: [...state.level.filter(elem => elem !== action.filter)]
            };
        case 'removeTypeFilter':
            if(state.type.length === 1) {
                return {
                    ...state,
                    type: [],
                }
            }
            return {
                ...state,
                type: [...state.type.filter(elem => elem !== action.filter)]
            };
        case 'removeAllFilters':
            return {
                nation: [],
                level: [],
                type: [],
            };
        default: return state;
    }
}