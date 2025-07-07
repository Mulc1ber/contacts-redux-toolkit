import { ProjectAction } from "src/types/ProjectActions";
import { ContactDto } from "../../types/dto/ContactDto";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";
import { GroupContactsDto } from "../../types/dto/GroupContactsDto";

interface ContactsState {
  contacts: ContactDto[];
  favorites: FavoriteContactsDto[];
  groups: GroupContactsDto[];
  loading: boolean;
  error: string | null;
}

const initialState: ContactsState = {
  contacts: [],
  favorites: [],
  groups: [],
  loading: false,
  error: null,
};

export const contactsReducer = (
  state = initialState,
  action: ProjectAction
): ContactsState => {
  switch (action.type) {
    case "FETCH_CONTACTS_REQUEST":
    case "FETCH_FAVORITES_REQUEST":
    case "FETCH_GROUPS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "FETCH_CONTACTS_SUCCESS":
      return {
        ...state,
        contacts: action.payload,
        loading: false,
        error: null,
      };

    case "FETCH_FAVORITES_SUCCESS":
      return {
        ...state,
        favorites: action.payload,
        loading: false,
        error: null,
      };

    case "FETCH_GROUPS_SUCCESS":
      return {
        ...state,
        groups: action.payload,
        loading: false,
        error: null,
      };

    case "FETCH_CONTACTS_FAILURE":
    case "FETCH_FAVORITES_FAILURE":
    case "FETCH_GROUPS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
